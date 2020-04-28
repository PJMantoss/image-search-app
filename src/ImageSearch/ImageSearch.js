import React from 'react'

export const ImageSearch = ({ handleGetRequest }) => {
    return (
        <div className="imageSearch">
            <form onSubmit={handleGetRequest} className="imageSearch__form">
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
