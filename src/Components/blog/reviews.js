import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import "./review.scss";

const data = [
  {
    name: "Username",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.",
    image: null,
  },
];

function reviews() {
  return (
    <div className="reviews">
      {[...Array(4)].map((d) => {
        return (
          <div className="review">
            <div className="image">
              {data[0].image ? (
                <img src={data[0].image} />
              ) : (
                <BsFillPersonFill />
              )}
            </div>
            <div className="info">
              <div className="info-name">{data[0].name}</div>
              <div>{data[0].review}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default reviews;
