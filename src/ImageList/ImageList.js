import React from 'react';
import { Link } from 'react-router-dom';
import './ImageList.css';

export const ImageList = ({images}) => {
    return (
        <div className="container">

            <div className="imageList">
                { images.map((image) => {
                    return (
                        <div key={image.id} className="imageList__container">
                                <img src={image.largeImageURL} alt={image.tags} className="imageList__image" />
                                <div className="image__details">
                                    <Link to={{
                                        pathname: ``,
                                        state: {image}
                                    }}>
                                        <button>View</button>
                                    </Link>
                                </div>
                        </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
