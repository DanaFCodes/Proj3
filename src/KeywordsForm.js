function KeywordForm(props) {

    return (
        <form className="form" onSubmit={(e) => {console.log("running onSubmit inside KeywordForm"); props.callDatabase(e)}}>
            <p>please enter some keywords to search through the database</p>
            <div>
        <label>
            Keywords:
            <input type="text" name="name" />
                </label>
            </div>
        <div className="button"> 
        <button className="letsSee" type="submit">inspo🪄</button>
        <button className="rando" type="submit">surprise me</button>
        </div>
    </form>
        
    )
}
    

export default KeywordForm;