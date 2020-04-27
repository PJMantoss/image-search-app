import React from 'react'

export const ImageList = (props) => {
    return (
        <div>
            { props.images.map(({ id, largeImageURL, tags }) => {
          return (
              <div key={id}>
                  <img src={largeImageURL} alt={tags} />
                  <button>Search</button>
              </div>
             )
        })}
        </div>
    )
}
