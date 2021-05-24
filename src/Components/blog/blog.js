import React from "react";
import "./blog.scss";
import { BsPencilSquare } from "react-icons/bs";
import CreateBlog from "../Create-and-Search-Blog/CreateBlog";
import Review from "./reviews";
import BlogPost from "../blog/blogPost";

function blog() {
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
      <div className="blog">
        <div>
          <BlogPost />
        </div>
        <div className="rv">
          <Review />
        </div>
        <CreateBlog />
      </div>
    </div>
  );
}

export default blog;
