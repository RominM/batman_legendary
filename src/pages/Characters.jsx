import React from 'react';
import { useParams } from 'react-router';
import Pic from '../components/Pic';
import Slider from './../components/Slider';
import characters from './../data/data.json';

const Characters = () => {
    const currentRouteParams = useParams();
    const charactersId = currentRouteParams.id;

    const currentCharactes = characters.find(
        (character) => character.id === charactersId
    );
    return (
        <>
            <Slider />
            <Pic />
        </>
    );
};

export default Characters;
