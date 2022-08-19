import React from 'react'
import { Text, View } from 'react-native'
import { IMovieFullData } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from "currency-formatter";

interface IProps {
    movieFull: IMovieFullData | undefined;
    cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}:IProps) => {
  return (
    <View>
        {/* Details */}
        <View style={{marginHorizontal:20}}>
            <View style={{flexDirection:"row"}}>
                <Icon name="star-outline" color="grey" size={16} />
                <Text style={{marginHorizontal:5}}>{movieFull?.vote_average}</Text>
                <Text> - {movieFull?.genres.map(genre=>genre.name).join(", ")}</Text>
            </View>
            {/* History */}
            <Text style={{fontSize:23, marginTop:0, fontWeight: "bold", color:"#000"}}>History</Text>
            <Text style={{fontSize:16, paddingVertical:5}} >{movieFull?.overview}</Text>
            <Text style={{fontSize:23, marginTop:0, fontWeight: "bold", color:"#000"}}>Budget</Text>
            <Text style={{fontSize:16, paddingVertical:5}} >{currencyFormatter.format(movieFull?.budget!, {code:"USD"})}</Text>
        </View>
        {/* Casting */}
    </View>
  )
}
