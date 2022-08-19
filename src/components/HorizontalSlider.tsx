import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IMovie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface IProps {
    title?: string;
    movies: IMovie[];
}

export const HorizontalSlider = ({ title, movies }: IProps) => {

  return (
        <View style={{height: title ? 260 : 240, marginVertical: 5}}>
            {title && <Text style={styles.title}>{title}</Text>}
            <FlatList
              data={movies}
              renderItem={({item})=> (
                <MoviePoster movie={item} width={130} height={200} />
              )}
              keyExtractor={(item)=>item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
        </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20, 
        fontWeight:"bold", 
        marginLeft:10, 
        marginBottom:10,
        color:"#000000"
    }
});
