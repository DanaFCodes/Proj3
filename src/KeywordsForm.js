import { useState } from 'react';

    function KeywordForm(props) {
        const [keywords, setKeywords] = useState('');

      
        return (

            <form onSubmit={(e) => {props.getKeyword(e)}}>
            <p>please enter some keywords to search through the database</p>
            <label>
                Keywords:
                <input type="text" name="name" />
            </label>
            <div> 
            <button type="submit">let's see my inspo!</button>
            <button type="submit">surprise me</button>
            </div>
        </form>
        
    )
}
    

export default KeywordForm;