import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { getMovieImage, useMovies } from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width:windowWidth } = Dimensions.get("window");

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

  const { setColors } = useContext(GradientContext);

  const getPosterColors = async ( index:number ) => {
    const movie = nowPlaying[index]
    const uri = getMovieImage(movie.poster_path);
    const [ primary = "darkGrey", secondary = "grey" ] = await getImageColors(uri);

    setColors({primary, secondary})
  }

  useEffect(() => {
    if(nowPlaying.length > 0){
      getPosterColors(0);
    }
  }, [nowPlaying])
  

  if(isLoading){
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator color="grey" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>

        <View style={{marginTop:top + 20}} >
            {/* Principal Carousel */}
            <View style={{height: 380}}>
              <Carousel
                data={nowPlaying}
                renderItem={({item})=> (<MoviePoster movie={item} />)}
                sliderWidth={windowWidth}
                itemWidth={220}
                vertical={undefined}
                inactiveSlideOpacity={0.75}
                onSnapToItem={ (index) => getPosterColors(index)  }
              />
            </View>

            {/* Popular movies */}
            <HorizontalSlider title="Popular movies" movies={popular} />
            {/* Top rated */}
            <HorizontalSlider title="Top rated" movies={topRated} />
            {/* Upcoming */}
            <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
