import React from "react";

const About = () => {
  return (
    <main>
      <div className="ps-3 bg-light rounded-3">
        <div className="container-fluid py-3">
          <h1 className="display-6 fw-bold">圖片搜尋網站</h1>
          <ul className="list-unstyled">
            <li className="col-md-10 fs-5">
              <ol>
                <li className="col-md-10 fs-5 my-2">
                  本專案使用React.js作為前端框架，並用AJAX實現透過API向第三方網站請求資料。
                </li>
                <li className="col-md-10 fs-5 my-2">
                  本專案的資料來源為Pexels網站，Pexels網站中的照片皆為免費授權。本專案向Pexels申請API
                  Key後，跟據Pexels API規範來設定參數。例如: API
                  URL中的頁數、每頁顯示照片數量等。
                </li>
                <img style={{ width: "70%" }} src="./project8-3.jpg" alt="" />
                <li className="col-md-10 fs-5 my-2">
                  在網站中，使用者可以透過搜尋得到想要的照片，同時也可以下載想要的照片。
                </li>
                <img style={{ width: "50%" }} src="./project8-1.jpg" alt="" />
                <br />
                <img style={{ width: "50%" }} src="./project8-2.jpg" alt="" />
              </ol>
            </li>
          </ul>
          <a
            href="https://github.com/james-chiou/picture-search-website"
            target="_blank"
            rel="noreferrer noopenner"
            className="btn btn-primary btn-lg"
          >
            Github
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
