import { useState, useEffect } from 'react';
import axios from 'axios';

// child to this comp
import DropDown from './DropDown';
import KeywordForm from './KeywordsForm';

function ApiCall() {
    // first value is current state when we render, second value is a function which updates our state
    const [allArt, setAllArt] = useState([]);
   
    // in quotaation becuase value is in ''
    const [selectedApi, setSelectedApi] = useState('AIC');


    // ok before i had the buttons set under the drop down, and this preventDefault() function worked... now its not working -- is refreshing the page🥲🥲🥲
    function getUserSelectedApi(e, value) {
        // updated selectedAPi(^) with arugmnet "value", through setSelectedApi function
        e.preventDefault();
        setSelectedApi(value)
    }

    // trying to prevent default on the buttons :(
    function getKeyword(e) {
        e.preventDefault();
        //     setSelectedApi(value)
    }

    console.log(selectedApi);
    useEffect(() => {
        if (selectedApi === 'AIC') {
            axios({
                url: `https://api.artic.edu/api/v1/artworks`,
                method: "GET",
                dataResponse: "json",
                params: {
                    limit: 100,     
                }
                
            }).then((response) => {
                // ok how can i decunstruct this so that this is what's called for every object in the response (check felicia's stupid github)
                const whatever = response.data.data[1]['id'];
                console.log(whatever);
                setAllArt(response.data)
            });
        } else if (selectedApi === 'V&A') {
            axios({
                url: `https://api.vam.ac.uk/v2/objects/search`,
                method: "GET",
                dataResponse: "json",
                params: {

                },
            }).then((response) => {
                setAllArt(response.data)
                console.log('api2 loaded')
            });

        } else {
            axios({
                url: `https://openaccess-api.clevelandart.org/api/artworks/`,
                method: "GET",
                dataResponse: "json",
                params: {

                },
            }).then((response) => {
                setAllArt(response.data)
                console.log('api3 loaded')
            });
        }
            
        // is rendered when user makes selection 
    }, [selectedApi]);

    // has to be outside of useEffect (asynch)
    console.log(allArt);

    return (
        <>
        <DropDown getUserSelectedApi={getUserSelectedApi} />
        <KeywordForm getKeyword={getKeyword} />
        </>
    )


}




export default ApiCall;