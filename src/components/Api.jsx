import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./Api.css"

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 9;
const API_key ='IMaTsC5p3qeZB1HZsTBRiTfvqVJoYwZpfei4BOfJz6c';
function Api() {
    const searchInput = useRef(null);
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchImages = useCallback(async () => {
        try {
            if (searchInput.current.value) {
                setErrorMsg('');
                setLoading(true);
                const { data } = await axios.get(
                    `${API_URL}?query=${
                        searchInput.current.value
                    }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
                        API_key
                    }`
                );
                setImages(data.results);
                setTotalPages(data.total_pages);
                setLoading(false);
            }
        } catch (error) {
            setErrorMsg('Error fetching images. Try again later.');
            console.log(error);
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    const resetSearch = () => {
        setPage(1);
        fetchImages();
    };

    const handleSearch = (event) => {
        event.preventDefault();
        resetSearch();
    };


    return (
        <div className='container'>
            <h1 className='title'>Image Search</h1>
            {errorMsg && <p className='error-msg'>{errorMsg}</p>}
            <div className='search-section'>
                <Form onSubmit={handleSearch}>
                    <Form.Control
                        type='search'
                        placeholder='Type something to search...'
                        className='search-input'
                        ref={searchInput}
                    />
                </Form>
            </div>
            <button className='btn'>
                <div onClick={() => handleSearch(event)}>Search</div>
            </button>
            {loading ? (
                <p className='loading'>Loading...</p>
            ) : (
                <>
                    <div className='images' id='container' >
                        {images.map((image) => (
                            <img
                                id='items'
                                key={image.id}
                                src={image.urls.small}
                                alt={image.alt_description}
                                className='image'
                            />
                        ))}
                    </div>
                    <div className='buttons'>
                        {page > 1 && (
                            <Button onClick={() => setPage(page - 1)}>Previous</Button>
                        )}
                        {page < totalPages && (
                            <Button onClick={() => setPage(page + 1)}>Next</Button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Api;