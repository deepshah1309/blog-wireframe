import React from "react";
import "./Blogpost.scss"
import Review from "../blog/reviews";
import {useParams} from "react-router-dom";
import Card from "../Card/Card";
function BlogPost() {
  const {id}=useParams();
  document.addEventListener('scroll', function (e) {
    var arrow1=document.querySelector(".side-tab1");
    var arrow2=document.querySelector(".side-tab2");
  
    if(window.pageYOffset>=612){
     
         if(arrow1 && arrow2){
         arrow1.style.visibility="visible";
        arrow2.style.visibility="visible";
         }
    }
    else if(window.pageYOffset<612){
      
         
         arrow1.style.visibility="hidden";
        arrow2.style.visibility="hidden";
         
    }

  });
 
const left=(e)=>{
var ids=parseInt(id);
ids--;
  document.location="/blog/"+ids;
}
const right=(e)=>{
  var ids=parseInt(id);
  ids++;
    document.location="/blog/"+ids;
}
 
  return <div className="part">

    <div>
      <section class="content">



        <div className="ImageSection" id="imageparts">


        </div>

        <div className="contentsection" id="textpart">
          <div className="title">
            The Amazing World Of The “Non-Standard” Search

            Engines
          
    </div>
          <div className="Text">
            In this article, we will explore an amazing world that may be totally unknown to the reader: the worlds of ‘non-standard’ search
            engines.By ‘non-standard’, we mean that they act differently as the ‘traditional’ text-based search engines such as Google, Yahoo,
            Bing, and others.
<br></br>
Some do not use text as keywords but multimedia elements instead, such as pictures, sounds, or videos for instance.

Some others allow searching in strange locations such as IoT devices. We wish here to give the reader a tour of these uncommon
search engines.
<br></br>
In this article, we will explore an amazing world that may be totally unknown to the reader: the worlds of ‘non-standard’ search
engines.By ‘non-standard’, we mean that they act differently as the ‘traditional’ text-based search engines such as Google, Yahoo,
Bing, and others.
<br></br>
            <br></br>
Some do not use text as keywords but multimedia elements instead, such as pictures, sounds, or videos for instance.

Some others allow searching in strange locations such as IoT devices. We wish here to give the reader a tour of these uncommon
search engines.In this article, we will explore an amazing world that may be totally unknown to the reader: the worlds of
‘non-standard’ search engines.By ‘non-standard’, we mean that they act differently as the ‘traditional’ text-based search engines
such as Google, Yahoo, Bing, and others.
<br></br>
Some do not use text as keywords but multimedia elements instead, such as pictures, sounds, or videos for instance.
<br></br>
Some others allow searching in strange locations such as IoT devices. We wish here to give the reader a tour of these uncommon
search engines.
In this article, we will explore an amazing world that may be totally unknown
to the reader: the worlds of ‘non-standard’ search engines.By ‘non-standard’,
we mean that they act differently as the ‘traditional’ text-based search
engines such as Google, Yahoo, Bing, and others.
<br></br>
Some do not use text as keywords but multimedia elements instead, such as
pictures, sounds, or videos for instance.
<br></br>
Some others allow searching in strange locations such as IoT devices. We
wish here to give the reader a tour of these uncommon search engines.

<br></br>

In this article, we will explore an amazing world that may be totally unknown
to the reader: the worlds of ‘non-standard’ search engines.By ‘non-standard’,
we mean that they act differently as the ‘traditional’ text-based search
engines such as Google, Yahoo, Bing, and others.
<img src="https://wallpapercave.com/wp/wp2812266.jpg" className="images" alt="blogs"></img>
            <br></br>
Some do not use text as keywords but multimedia elements instead, such as
pictures, sounds, or videos for instance.
<br></br>
Some others allow searching in strange locations such as IoT devices. We
wish here to give the reader a tour of these uncommon search engines.In
this article, we will explore an amazing world that may be totally unknown to
the reader: the worlds of ‘non-standard’ search engines.By ‘non-standard’,
we mean that they act differently as the ‘traditional’ text-based search
engines such as Google, Yahoo, Bing, and others.
<br></br>
            <br></br>
Some do not use text as keywords but multimedia elements instead, such as
pictures, sounds, or videos for instance.
<br></br>
            <br></br>
Some others allow searching in strange locations such as IoT devices. We
wish here to give the reader a tour of these uncommon search engines.






  </div>
        </div>
        <div className="Reviewpart">
          <Review />
        </div>

      </section>
      <div className="side-tab1" onClick={left}>
        <i class="fas fa-arrow-left"></i>
      </div>

      <div className="side-tab2" onClick={right}>
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
    <div>
    <h1>People also like</h1>
    <div className="peoplealsolike">
      
      
      <Card id={8}>

      </Card>
      <Card id={9}></Card>
      <Card id={10}></Card>
    </div>
    </div>
  </div>
}

export default BlogPost;
