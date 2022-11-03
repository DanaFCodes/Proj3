function KeywordForm(props) {

    return (
        <form className="form" onSubmit={(e) => {props.callDatabase(e)}}>
            <p>please enter some keywords to search through the database</p>
            <div>
                <label>
                    Keywords:
                    <input
                        type="text"
                        name="keywords"
                        onChange={(e) => { props.handleChange(e) }}
                        value={props.keyword}
                    />
                </label>
            </div>
            <div className="button">
                <button
                    className="letsSee"
                    type="submit"
                >
                    inspo🪄</button>
                
            </div>
        </form>
        
        )
    }
    

export default KeywordForm;
