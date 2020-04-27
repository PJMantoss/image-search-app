import React from 'react'

export const ImageSearch = (props) => {
    return (
        <div>
            <form onSubmit={props.handleGetRequest}>
                <input
                    type="text" 
                    name="searchValue" 
                    autoComplete="off" 
                    placeholder="Search for images..."
                />
                <button>Search</button>
            </form>
        </div>
    )
}