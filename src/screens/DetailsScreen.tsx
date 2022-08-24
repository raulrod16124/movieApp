import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { IMovie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import Icon from "react-native-vector-icons/Ionicons";
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { getMovieImage } from '../hooks/useMovies';

const screenHeight = Dimensions.get("screen").height;

interface IProps extends StackScreenProps<RootStackParams, "DetailsScreen"> {}

export const DetailsScreen = ({route, navigation}: IProps) => {

  const movie = route.params as IMovie;
  const uri = getMovieImage(movie.poster_path);

  const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={detailsStyles.imageContainer} >
        <View style={detailsStyles.imageBorder}>
            <Image 
              source={{uri:uri}} 
              style={detailsStyles.posterImage}
            />
        </View>
      </View>
      <View style={detailsStyles.marginContainer} >
        <Text style={detailsStyles.subTitle}>{movie.original_title}</Text>
        <Text style={detailsStyles.title}>{movie.title}</Text>
      </View>
      { isLoading
        ? <ActivityIndicator size={30} color="grey" style={{marginTop: 20}} />
        : <MovieDetails movieFull={movieFull} cast={cast} />
      }

      {/* Back button */}
      <TouchableOpacity style={detailsStyles.backButton} onPress={()=>navigation.pop()} >
        <Icon color="white" name="arrow-back-outline" size={50} />
      </TouchableOpacity>

    </ScrollView>
  )
}

const detailsStyles = StyleSheet.create({
  backButton:{
    position: "absolute",
    top:10,
    left:10,
    color:"#fff",
    borderRadius: 100,
    backgroundColor:"grey",
    opacity: 0.5,
  },
  imageContainer:{
    width: "100%",
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,

  },
  imageBorder:{
    flex:1,
    overflow: "hidden",
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20
  },
  posterImage:{
      flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    color: "#000",
    opacity: 0.6,
  },
  title: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold"
  }
});