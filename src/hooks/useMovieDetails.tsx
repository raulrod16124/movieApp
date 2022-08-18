import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Cast, ICreditsResponse } from '../interfaces/creditsInterface';
import { IMovieFullData } from '../interfaces/movieInterface';

interface IMovieDetails {
    isLoading: boolean;
    movieFull?: IMovieFullData;
    cast: Cast[];
}

export const useMovieDetails = (movieId:number) => {
    const [state, setState] = useState<IMovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const responseFullData = movieDB.get<IMovieFullData>(`/${movieId}`);
        const responseCredits = movieDB.get<ICreditsResponse>(`/${movieId}/credits`);

        const [movideDetailsResponse, castPromiseResponse] = await Promise.all([responseFullData, responseCredits])

        setState({
            isLoading:false,
            movieFull: movideDetailsResponse.data,
            cast: castPromiseResponse.data.cast
        })
    }

    useEffect(()=>{
        getMovieDetails();
    },[])

  return { ...state }
}
