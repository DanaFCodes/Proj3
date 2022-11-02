import { useState } from 'react';
import axios from 'axios';
import './partials/_api.scss';
// children to this component: 
import DropDown from './DropDown';
import KeywordForm from './KeywordsForm';
import Loader from './Loader';


function ApiCall() {
    const [allArt, setAllArt] = useState([]);

    const [selectedApi, setSelectedApi] = useState('');

    const [loading, setLoading] = useState(false);

    const [keyword, setKeyword] = useState('');

    const [inspoClicked, setInspoClicked] = useState(false);

    function makeRequest() {
    
        if (selectedApi === '') {
            alert('please select a database!')

        } else if (selectedApi === 'RIJKS') {
            axios({
                url: 'https://www.rijksmuseum.nl/api/en/collection',
                method: "GET",
                dataResponse: "json",
                params: {
                    key: 'rtliWmhr',
                    ps: 100,
                    q: keyword
                },
            }).then((response) => {
                
                const newArtData = response.data.artObjects.map((art) => {
                    return {
                        ...art,
                        imageUrl: art.webImage.url,
                        imageCreator: art.longTitle,
                        altText: art.title
                    }
                })
                setAllArt(newArtData)
                setLoading(true);
            });

        } else {
            axios({
                url: `https://openaccess-api.clevelandart.org/api/artworks/`,
                method: "GET",
                dataResponse: "json",
                params: {
                    limit: 100,
                    q: keyword
                },
            }).then((response) => {
                
                const newArtData = response.data.data.map((art) => {
                    if (art.images) {
                        return {
                            ...art,
                            imageUrl: art.images.print.url,
                            imageCreator: art.tombstone,
                            altText: art.title
                       }
                    }
                }).filter((noImages) => {
                    if (noImages !== undefined) {
                        return noImages
                    }
                })
                setAllArt(newArtData)
                setLoading(true);
            });
        }
    }

    function handleChange(e) {
        setKeyword(e.target.value)
    }

    function callDatabase(e) {
        e.preventDefault();
        makeRequest()
        setInspoClicked(true)
        setLoading(false)
        // CANT CLEAR OUT THE FORM
        // setKeyword('')
    }

    function getUserSelectedApi(e) {
        e.preventDefault();
        setSelectedApi(e.target.value)
    }
    
  
    return (
        <>
            {/* this tells us which function the child comp has access to */}
            <DropDown getUserSelectedApi={getUserSelectedApi} />
            <KeywordForm callDatabase={callDatabase} handleChange={handleChange} />

            {inspoClicked ? 
                loading ? 
                allArt.map(item => {
                    return (
                        <figure className='img'>
                            <img className='cma' key={item.id} src={item.imageUrl} alt={item.altText} />
                            <figcaption className='caption'>
                                <h2>{item.imageCreator}</h2>
                            </figcaption>
                         </figure>
                    )

                }) : <Loader />
            : null
            }
        </>
    )
    
}

export default ApiCall;