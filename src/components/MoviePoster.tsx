import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { getMovieImage } from '../hooks/useMovies';
import { IMovie } from '../interfaces/movieInterface'

interface IProps {
    movie: IMovie;
    height?:number;
    width?:number;
}

export const MoviePoster = ({movie, height = 340, width = 220}:IProps) => {

    const uri = getMovieImage(movie.poster_path);

    const navigation = useNavigation();

  return (
    <TouchableOpacity 
        // @ts-ignore
        onPress={()=>navigation.navigate("DetailsScreen", movie)}
        activeOpacity={0.8}
        style={{
            width, 
            height, 
            marginHorizontal: 2,
            paddingBottom: 10,
            paddingHorizontal: 2,
        }} 
    >
        <View style={imageStyles.imageShadow}>
            <Image
                source={{
                    uri
                }}
                style={imageStyles.image}
            />
        </View>
    </TouchableOpacity>
  )
}

const imageStyles = StyleSheet.create({
    imageShadow:{
        flex: 1,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 10,
    },
    image:{
        flex: 1,
        borderRadius: 15,
    }
});
