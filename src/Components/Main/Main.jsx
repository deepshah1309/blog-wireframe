import Card from "../Card/Card";
import "./Main.scss";
import CreateBlog from "../Create and Search Blog/CreateBlog"

const Main = () => {
    return (
        <div className="main">
            <div className="blog_display">
            
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

                <div className="More"><button className="More_btn">More</button></div>
                <br/><br/><br/>
            
            </div>
            <CreateBlog />
        </div>
    )
}
export default Main;