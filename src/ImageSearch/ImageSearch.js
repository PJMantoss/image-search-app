import React from 'react'

export const ImageSearch = () => {
    return (
        <div>
            <form>
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
