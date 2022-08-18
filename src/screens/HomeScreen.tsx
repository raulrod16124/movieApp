import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width:windowWidth } = Dimensions.get("window");

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  const {top} = useSafeAreaInsets();

  if(isLoading){
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator color="green" size={100} />
      </View>
    );
  }

  return (
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
  )
}
