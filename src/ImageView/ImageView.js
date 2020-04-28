import React from 'react';
import { Link } from 'react-router-dom';

export const ImageView = (props) => {

    const { largeImageURL: image, tags, user: owner, pageURL } = props.location.state.image;

    return (
        <div>
            <image src={image} alt={tags}/>
        </div>
    )
}
