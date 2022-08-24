import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFadeAnimation } from '../hooks/useFadeAnimation';

interface IProps {
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}:IProps) => {

    const { colors, prevColors, setPrevColors } = useContext(GradientContext);

    const { opacity, fadeIn, fadeOut } = useFadeAnimation();

    useEffect(()=>{
        fadeIn( () => setPrevColors(colors) );
        fadeOut(0);
    }, [colors])

  return (
    <View style={{ flex:1}} >
        <LinearGradient 
            colors={[ prevColors.primary, prevColors.secondary, "#ffffff"]} 
            style={{ ...StyleSheet.absoluteFillObject}}
            start={{ x: 0.1, y: 0.1}}
            end={{ x: 0.5, y: 0.8}}
        />
        <Animated.View
            style={{ ...StyleSheet.absoluteFillObject, opacity}}
        >
            <LinearGradient 
                colors={[ colors.primary, colors.secondary, "#ffffff"]} 
                style={{ ...StyleSheet.absoluteFillObject}}
                start={{ x: 0.1, y: 0.1}}
                end={{ x: 0.5, y: 0.8}}
            />
        </Animated.View>
        {children}
    </View>
  )
}
