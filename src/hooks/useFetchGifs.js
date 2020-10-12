//Custom hook
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => { //Effect no puede ser async!
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]); //Ejecutar cuando cambia la categoría

    return state;
};