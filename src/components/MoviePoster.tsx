import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IMovie } from '../interfaces/movieInterface'

interface IProps {
    movie: IMovie;
    height?:number;
    width?:number;
}

export const MoviePoster = ({movie, height = 340, width = 220}:IProps) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <View style={{width, height, marginHorizontal: 10}} >
        <View style={imageStyles.imageShadow}>
            <Image
                source={{
                    uri
                }}
                style={imageStyles.image}
            />
        </View>
    </View>
  )
}

const imageStyles = StyleSheet.create({
    imageShadow:{
        flex: 1,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
    image:{
        flex: 1,
        borderRadius: 15,
    }
});
