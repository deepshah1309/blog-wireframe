import "./Search.scss";
const Search=({title})=>{
    return (
        <div className="search_area">
                <div className="Blog_title">
                <h3>{title}</h3>
                    </div>
                <div className="">
                <div class="input-container">
                    <i class="fa fa-search icon"></i>
                    <input class="input-field" type="text" placeholder="Search Here.." name="Search"/>
                    <i class="fas fa-microphone icon"></i>
                </div>
                </div>
                
           
        </div>
    )
}
export default Search;