import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import styles from './Detail.module.css';

export default function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);

    const getMovie = useCallback( async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        setMovieInfo(json.data.movie);
        console.log(movieInfo);
        setLoading(false);

        // console.log(json);
    });

    useEffect(() => {
        getMovie();
    }, []);
    
    return (
        <div>
            {loading 
                ? <Loading /> 
                : 
                <div>
                    <img 
                        src={movieInfo.medium_cover_image} 
                        alt={movieInfo.medium_cover_image} 
                        className={styles.movie_background_img}
                    />
                    <div className={styles.movie_info}>
                        <h1>{movieInfo.title}</h1>
                        <ul style={{padding: "0 0 0 20px", fontSize: "18px"}}>
                            <li>Rating : {movieInfo.rating}</li>
                            <li>Genres : 
                                <ul style={{ padding: "0 0 0 20px", fontSize: "16px" }}>
                                    {movieInfo.genres.map((g, index) => <li key={index}>{g}</li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>}
        </div>
    )
}
