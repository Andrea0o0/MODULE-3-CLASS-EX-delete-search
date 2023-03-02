import React from 'react'

export default function SearchInput({handleSearch}) {

    const handleChange = (e) => {
        handleSearch(e.target.value)
    }

    return (
        <div>
            <input type='text' name='search' onChange={handleChange} placeholder='Input search HERE!'/>
        </div>
    )
}
