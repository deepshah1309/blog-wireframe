import Card from "../Card/Card";
import Search from "../Search/Search"

import "./Main.scss";
const Main=()=>{
    return (
        <>
            <Search title={"Main"} />
        <div className="blog_display">
            
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <br></br>
            <div className="More"><button className="More_btn">More</button></div>
            
    </div>
        </>
    )
}
export default Main;