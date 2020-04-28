import React from 'react';
import './ImageList.css';

export const ImageList = (props) => {
    return (
        <div className="container">

            <div className="imageList">
                { props.images.map(({ id, largeImageURL, tags }) => {
                    return (
                        <div key={id} className="imageList__container">
                                <img src={largeImageURL} alt={tags} className="imageList__image" />
                                <div className="image__details">
                                    <button>Search</button>
                                </div>
                        </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
