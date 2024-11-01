import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>

      <a
        target="_blank"
        href={data.src.large}
        className="btn btn-success btn-md m-1"
      >
        下載
      </a>
    </div>
  );
};

export default Picture;
