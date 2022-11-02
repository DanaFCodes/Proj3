function DropDown(props) {
    return (
        <div className="dropDown">
        <h2>please pick a database to search through:</h2>
        <select
            onChange={(e) => {props.getUserSelectedApi(e)}}
        >       
                <option className="option" value={''}>please select from below</option>
                <option className="option" value={'RIJKS'}>Rijksmuseum</option>
                <option className="option" value={'CMA'}>Cleveland Museum of Art</option>
                
        </select>
        </div>
    )
}


export default DropDown;