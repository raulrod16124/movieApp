import React, { createContext, useState } from 'react'

interface IGradientProviderProps {
    children: JSX.Element | JSX.Element[];
}

interface IImageColors {
    primary: string;
    secondary: string;
}

interface IContextProps {
    colors: IImageColors;
    prevColors: IImageColors;
    setColors: (colors:IImageColors) => void;
    setPrevColors: (colors:IImageColors) => void;
}

const initialColors: IImageColors = {
    primary: "transparent",
    secondary: "transparent"
}

export const GradientContext = createContext( {} as IContextProps );

export const GradientProvider = ({children}: IGradientProviderProps) => {

    const [colors, setColors] = useState<IImageColors>(initialColors);
    const [prevColors, setPrevColors] = useState<IImageColors>(initialColors);

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setColors,
            setPrevColors
        }} >
            {children}
        </GradientContext.Provider>
    )
}
