import React from "react";
import "./blog.scss";
import { BsPencilSquare } from "react-icons/bs";
import CreateBlog from "../Create-and-Search-Blog/CreateBlog";

import BlogPost from "../blog/blogPost";

import {useParams} from "react-router-dom";
function Blog() {
  const id=useParams();
  return (
    <div className="blogPost">
      <div className="search-component">
        <div className="search-blog">
          <div class="input-container">
            <i class="fa fa-search icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Search Here.."
              name="Search"
            />
            <i class="fas fa-microphone icon"></i>
          </div>
          <button className="btn-create">
            Write a Post
            <BsPencilSquare className="pen" />
          </button>
        </div>
      </div>
<<<<<<< HEAD
      <div className="blog">
        <div>
          <BlogPost />
        </div>
        <div className="rv">
          <Review />
        </div>
        <CreateBlog />
      </div>
=======
      <div>
        <BlogPost id={id}/>
      </div>
     
      <CreateBlog />
>>>>>>> 59d5dd8a256e500004d06a5c21f73d7aac2fc4c1
    </div>
  );
}

export default Blog;
