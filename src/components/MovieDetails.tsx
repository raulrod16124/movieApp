import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { IMovieFullData } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from "currency-formatter";
import { ActorItem } from './ActorItem';

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
                <Text style={{marginHorizontal:5, color:"#000"}}>{movieFull?.vote_average}</Text>
                <Text style={{color:"#000"}} > - {movieFull?.genres.map(genre=>genre.name).join(", ")}</Text>
            </View>
            {/* History */}
            <Text style={{fontSize:23, marginTop:0, fontWeight: "bold", color:"#000"}}>History</Text>
            <Text style={{fontSize:16, paddingVertical:5, color:"#000"}} >{movieFull?.overview}</Text>
            <Text style={{fontSize:23, marginTop:0, fontWeight: "bold", color:"#000"}}>Budget</Text>
            <Text style={{fontSize:16, paddingVertical:5, color:"#000"}} >{currencyFormatter.format(movieFull?.budget!, {code:"USD"})}</Text>
        </View>
        {/* Casting */}
        <View style={{marginTop:10, marginBottom:100}} >
            <Text style={{fontSize:23, marginTop:0, marginHorizontal:20, fontWeight: "bold", color:"#000"}}>Actors</Text>
            <FlatList
              data={cast}
              keyExtractor={(item)=>item.id.toString()}
              renderItem={({item})=> <ActorItem actor={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginTop:10, height:80}}
            />
              {/* { cast.map( actor => <ActorItem key={actor.cast_id} actor={actor} />) } */}
        </View>
    </View>
  )
}
