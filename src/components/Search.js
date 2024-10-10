import { useState } from "react"
import axios from 'axios'

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    const {setGifs} = props;

    const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search'
    const GIPHY_API_KEY = '43AL10dIQe6L9zoznaWwuQP7ULNFOk0e'

    // http://api.giphy.com/v1/gifs/search?api_key=43AL10dIQe6L9zoznaWwuQP7ULNFOk0e&q=monkey

    const handleSearch = () => {
        axios.get(`${GIPHY_URL}?api_key=${GIPHY_API_KEY}&q=${searchTerm}`)
        .then((res) => {
            console.log(res.data.data)
            setGifs(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleClick = () => {
        if (!searchTerm) {
            alert('Please enter a search term');
            return;
        }

        handleSearch()
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }


    return (
        <>
            <input value={searchTerm} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
        </>
    )
}

export default Search;