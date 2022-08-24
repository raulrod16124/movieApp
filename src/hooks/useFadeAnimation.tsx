import React, { useRef } from 'react'
import { Animated } from 'react-native';

export const useFadeAnimation = () => {
    const opacity = useRef( new Animated.Value(0)).current;

    const fadeIn = ( callback?: Function ) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }
        ).start( () => callback ? callback() : null );
    }

    const fadeOut = ( duration: number = 200) => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }
        ).start();
    }

    return { opacity, fadeIn, fadeOut }
}
