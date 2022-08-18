import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { IMovie, IMovieDbMoviesReponse } from "../interfaces/movieInterface"

interface IMoviesState {
    nowPlaying: IMovie[];
    popular: IMovie[];
    topRated: IMovie[];
    upcoming: IMovie[];
}


export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<IMoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<IMovieDbMoviesReponse>("/now_playing");
        const popularPromise = movieDB.get<IMovieDbMoviesReponse>("/popular");
        const topRatedPromise = movieDB.get<IMovieDbMoviesReponse>("/top_rated");
        const upcomingPromise = movieDB.get<IMovieDbMoviesReponse>("/upcoming");

        const response = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPromise
        ])

        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        });

        setIsLoading(false);
    }

    useEffect(() => {
        // GET /now_playing
        getMovies();
    }, [])
    

  return {...moviesState, isLoading}
}
