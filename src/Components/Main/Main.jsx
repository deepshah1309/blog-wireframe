import Card from "../Card/Card";
import "./Main.scss";
import CreateBlog from "../Create-and-Search-Blog/CreateBlog"

const Main = () => {
    return (
        <div className="main">
            <div className="blog_display">
            
                <Card id={1} />
                <Card id={2}/>
                <Card id={3}/>
                <Card id={4}/>
                <Card id={5}/>
                <Card id={6}/>
                <Card id={7}/>
                <Card id={8}/>
                <Card id={9}/>

                <div className="More"><button className="More_btn">More</button></div>
                <br/><br/><br/>
            
            </div>
            <CreateBlog />
        </div>
    )
}
export default Main;