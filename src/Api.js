import { useState } from 'react';
import axios from 'axios';
import './partials/_api.scss';
// children to this component: 
import DropDown from './DropDown';
import KeywordForm from './KeywordsForm';


function ApiCall() {
    // first value is current state when we render, second value is a function which updates our state... so here we are using the setAllArt function to store the API response, and then accessing it with allArt when we map through at the bottom... wondering if 
    const [allArt, setAllArt] = useState([]);
    
    // in quotaation becuase value is in ''
    const [selectedApi, setSelectedApi] = useState('');


    function makeRequest() {
        if (selectedApi === 'AIC') {
            axios({
                url: `https://api.artsy.net/api/`,
                method: "GET",
                dataResponse: "json",
                params: {
                    client_id: 'f99c82f03c43e56ff8b7',
                    limit: 100,
                }
                
            }).then((response) => {
                setAllArt(response.data)
            });

        } else if (selectedApi === 'RIJKS') {
            axios({
                url: 'https://www.rijksmuseum.nl/api/en/collection',
                method: "GET",
                dataResponse: "json",
                params: {
                    // imgonly: true,
                    key: 'rtliWmhr',
                    ps: 100,
                },
            }).then((response) => {
                setAllArt(response.data.artObjects)
            });

        } else {
            axios({
                url: `https://openaccess-api.clevelandart.org/api/artworks/`,
                method: "GET",
                dataResponse: "json",
                params: {
                    limit: 100,
                },
            }).then((response) => {
                setAllArt(response.data.data)
                // console.log('api3 loaded')
            });
        }
    }

    function callDatabase(e) {
        e.preventDefault();
        makeRequest()
    }

    function getUserSelectedApi(e) {
        // updated selectedAPi(^) with arugmnet "value", through setSelectedApi function
        e.preventDefault();
        setSelectedApi(e.target.value)
    }


    // has to be outside of useEffect (asynch)
    console.log(allArt);

    return (
        <>
            <DropDown getUserSelectedApi={getUserSelectedApi} />
            <KeywordForm callDatabase={callDatabase} />
            
            {
                
                allArt.map(item => {

                    if (!!item?.images) {
                        return (<figure className='img'><img className='cma' key={item.id} src={item.images.print.url}  />
                            <figcaption className='caption'><h2>{item.title} {item.creation_date} {item.creators.description}</h2></figcaption>
                        </figure>)
                    } else if (!!item?.webImage) {
                        return (<figure className='img'><img key={item.id} src={item.webImage.url} />
                            <figcaption className='caption'><h2>{item.longTitle}</h2></figcaption>
                        </figure>)


                    }


                })
            
            }
            
             
        </>
    )

}


export default ApiCall;