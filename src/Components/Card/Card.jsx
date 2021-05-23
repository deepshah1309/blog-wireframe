import "./card.scss";
const Card=({id})=>{
    return(
        <div className="card" onClick={(e)=>{
            window.location="/blog/"+id;
        }}>
            <div className="imagepart">

            </div>
            <div className="container">
                <div className="insights">
                    <div><i class="fas fa-heart"></i>&nbsp; &nbsp;609</div>
                    <div><i class="fas fa-minus-square"></i>&nbsp; &nbsp;120</div>
                    <div><i class="fas fa-clock"></i>&nbsp; &nbsp;June2,2021</div>
                </div>
                <div className="title1">
                    <p>
                        The amazing world of The non-standard search Engines
                    </p>
                </div>
                <div className="ReadMore_area">
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}
export default Card;