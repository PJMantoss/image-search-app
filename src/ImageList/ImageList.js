import React from 'react'

export const ImageList = (props) => {
    return (
        <div>
            { props.images.map(({ id, tags }) => {
          return <p key={id}>{ tags }</p>
        })}
        </div>
    )
}
