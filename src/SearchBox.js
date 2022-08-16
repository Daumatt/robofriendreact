import './SearchBox.css';


function SearchBox(props) {
   
    return (
        <div className="input-container">
            <input onChange={props.updateSearchInput} className="inp" type="text" placeholder="Search..."/>
        </div>
    )
}

export default SearchBox;

