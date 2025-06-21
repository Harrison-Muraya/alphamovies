import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import { fetchTrendingMovies, fetchTrendingTv, fetchTopRatedMovies, fetchUpcomingMovies } from '../services/tmdb';

const Index = () => {
    const [selectedContent, setSelectedContent] = useState(null);

    const { data: trendingMovies } = useQuery({
        queryKey: ['trendingMovies'],
        queryFn: fetchTrendingMovies,
    });

    const { data: trendingTv } = useQuery({
        queryKey: ['trendingTv'],
        queryFn: fetchTrendingTv,
    });

    const { data: topRatedMovies } = useQuery({
        queryKey: ['topRatedMovies'],
        queryFn: fetchTopRatedMovies,
    });

    const { data: upcomingMovies } = useQuery({
        queryKey: ['upcomingMovies'],
        queryFn: fetchUpcomingMovies,
    });

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            {trendingMovies && trendingMovies.results && trendingMovies.results.length > 0 && (
                <Hero movie={trendingMovies.results[0]} />
            )}

            <div className="relative z-10 -mt-32 space-y-8 pb-20">
                {trendingMovies && (
                    <MovieRow title="Trending Now" movies={trendingMovies.results} />
                )}

                {topRatedMovies && (
                    <MovieRow title="Top Rated Movies" movies={topRatedMovies.results} />
                )}

                {trendingTv && (
                    <MovieRow title="Popular TV Shows" movies={trendingTv.results} />
                )}

                {upcomingMovies && (
                    <MovieRow title="Coming Soon" movies={upcomingMovies.results} />
                )}
            </div>
        </div>
    );
};

export default Index;
