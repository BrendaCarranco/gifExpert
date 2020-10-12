import React/* , { useState, useEffect } */ from 'react';
import GifGridItem from './components/GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';

const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);

    /*     useEffect(() => {
            getGifs(category)
                .then(setImages); //desestructuración, es lo mismo que then(img => setImages(img))
        }, [category]); Este ahora es un ustum hook :D */

    return (
        <div>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {
                loading && <p className='animate__animated animate__flash'>Loading...</p>
            }

            <div className='card-grid'>
                <ol>
                    {
                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img} /> //Esto es desestructuración iwual a img = {img} ;)
                        ))
                    }
                </ol>
            </div>
        </div>
    );
};

export default GifGrid;
