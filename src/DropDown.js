
import { useEffect, useState } from 'react';

// child of this comp
// import KeywordForm from './KeywordsForm';

function DropDown(props) {
    // const [userInput, setUserInput] = useState('');
    
    // function updateState(e) {
    //     // tracks when user makes a selection from drop down!
    //     // console.log(e);
    //     setUserInput(e.target.value)
    // }

    // function getKeyword(e) {
    //     e.preventDefault();
    //     //     setSelectedApi(value)
    // }

    return (
        // getUserSelectedApi requires 2 arguments because it had two arguements in api.js -- we do props.getUserSelectedApi because we're passing it in as a prop (see return in api.js, )
        <>
        <h2>please pick a database to search through</h2>
        <select
            onChange={(e) => {console.log("running onChange inside DropDown"); props.getUserSelectedApi(e)}}
        >
            <option value={'AIC'}>Art Institute of Chicago</option>
            <option value={'V&A'}>Victoria & Albert Museum</option>
            <option value={'CMA'}>Cleveland Museum of Art</option>
        </select>
        </>
    )
}


export default DropDown;