import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'

interface IProps {
    actor: Cast;
}

export const ActorItem = ({actor}:IProps) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={actorStyles.container} >
        {actor.profile_path &&
            <Image
                source={{uri:uri}}
                style={actorStyles.image}
            />
        }
        <View style={actorStyles.actorInfo}>
            <Text style={actorStyles.title} >{actor.name}</Text>
            <Text style={actorStyles.subTitle} >{actor.character}</Text>
        </View>
    </View>
  )
}


const actorStyles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"#fff",
        borderRadius:10,
        marginLeft:20,
        padding:2,
        paddingRight:10,
        height: 55,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.53,
        shadowRadius: 10,
      
        elevation: 10,
    },
    image:{
        width:50,
        height:50,
        borderRadius:10
    },
    actorInfo:{
        marginLeft:10,
        marginTop:3,
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:"#000"
    },
    subTitle:{
        fontSize:16,
        color:"#000"
    }
});