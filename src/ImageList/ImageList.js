import React from 'react'

export const ImageList = (props) => {
    return (
        <div className="container">

            <div className="row">
                { props.images.map(({ id, largeImageURL, tags }) => {
                    return (
                        <div key={id} className="col-md-4">

                            <div className="imageList__container">
                                <img src={largeImageURL} alt={tags} className="imageList__image" />
                            </div>

                            <button>Search</button>
                        </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
