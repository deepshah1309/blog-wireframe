import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { BiEditAlt } from "react-icons/bi";
import "./create.scss";

function CreateBlog() {
  const [create, setcreate] = useState(false);

  return (
    <div className="createBlog">
      <button
        className="btn-create"
        onClick={() => {
          setcreate(!create);
          console.log(create);
        }}
      >
        Write a Post
        <BiEditAlt className="pen" />
      </button>

      {create ? (
        <div className="form-group">
          <div className="form">
            <div className="post">
              <input
                className="input-text"
                type="text"
                placeholder="Enter the Title"
                name="title"
              />
              <textarea />
            </div>
            <div className="img">
              <div className="upload">
                <div className="boxes">
                  <div className="box-1 box"></div>
                  <div className="box-2 box"></div>
                  <div className="box-3 box"></div>
                </div>
                <input type="file" id="actual-btn" hidden />
                <label for="actual-btn">No file chosen</label>
              </div>
              <button onClick={() => console.log("Submitted")}>Post</button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CreateBlog;
