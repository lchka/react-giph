import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap'
import Search from './Search';

const GiphCard = (props) => {
    const { image, title, url } = props

    return (
        <Card style={{ maxHeight: "20rem" }}>
            <Card.Img
                variant="top"
                src={image}
                className="object-fit-cover h-75 pt-2"
            />
            <Card.Body>
                <Card.Title>
                    <a href={url}>{title}</a>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

const GiphyViewer = () => {

    const GIPHY_URL = 'http://api.giphy.com/v1/gifs/trending'
    const GIPHY_API_KEY = '43AL10dIQe6L9zoznaWwuQP7ULNFOk0e'

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        axios.get(`${GIPHY_URL}?apikey=${GIPHY_API_KEY}`)
            .then(({ data }) => {
                console.log(data.data)
                setGifs(data.data)
            })
            .catch((res) => {
                console.error(res)
            })
    }, [])

    return (
        <>
            <Search setGifs={setGifs} />
            <Row xs={1} md={2} lg={3}>
                {/* Using curly brackets, we need the return keyword */}

                {
                    gifs.map((gif) => {
                        return <GiphCard
                            key={gif.id}
                            image={gif.images.fixed_width.url}
                            url={gif.url}
                            title={gif.title}
                        />
                    })

                    // Using soft brackets, the return is implied. No keyword needed.
                    // gifs.map((gif) => (
                    //     <GiphCard key={gif.id} image={gif.images.fixed_width.url} url={gif.url} title={gif.title} />
                    // ))
                }
            </Row>
        </>
    )
}

export default GiphyViewer;