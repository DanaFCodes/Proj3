
import { useEffect, useState } from 'react';

// child of this comp
// import KeywordForm from './KeywordsForm';

function DropDown(props) {
    const [userInput, setUserInput] = useState('');
    
    function updateState(e) {
        // tracks when user makes a selection from drop down!
        // console.log(e);
        setUserInput(e.target.value)
    }

    // function getKeyword(e) {
    //     e.preventDefault();
    //     //     setSelectedApi(value)
    // }

    return (
        // getUserSelectedApi requires 2 arguments because it had two arguements in api.js -- we do props.getUserSelectedApi because we're passing it in as a prop (see return in api.js, )
        <>
        <form onSubmit={(e) => {props.getUserSelectedApi(e, userInput) }} >

            <h2>please pick a database to search through</h2>
            <select
                onChange={(e) => { updateState(e) }}
            >
                <option value={'AIC'} onChange={(e) => {props.getUserSelectedApi(e, userInput)}}>Art Institute of Chicago</option>
                <option value={'V&A'} onChange={(e) => { props.getUserSelectedApi(e, userInput) }}>Victoria & Albert Museum</option>
                <option value={'CMA'} onChange={(e) => { props.getUserSelectedApi(e, userInput) }}>Cleveland Museum of Art</option>
            </select>
            </form>
        </>
    )
}


export default DropDown;