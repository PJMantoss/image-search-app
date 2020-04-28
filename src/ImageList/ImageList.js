import React from 'react';
import { Link } from 'react-router-dom';
import './ImageList.css';

export const ImageList = ({images}) => {
    return (
        <div className="container">

            <div className="imageList">
                { images.map(({ id, largeImageURL, tags }) => {
                    return (
                        <div key={id} className="imageList__container">
                                <img src={largeImageURL} alt={tags} className="imageList__image" />
                                <div className="image__details">
                                    <Link>
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
