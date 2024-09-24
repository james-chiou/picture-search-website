import React from "react";

const About = () => {
  return (
    <main>
      <div className="container-fluid py-3">
        <div className="ps-3 bg-light rounded-3">
          <h1 className="display-5 fw-bold fs-2">Project 8 - 圖片搜尋網站</h1>
          <p className="col-md-8 fs-4 mb-2">
            Project8使用 React.js
            作為前端框架、以及axios套件處理AJAX來向第三方網站請求資料。
          </p>
          <p className="col-md-8 fs-4 mb-2">
            本網站的圖片來源為圖片免費授權的Pexel網站。向Pexel申請API
            Key後，再透過axios套件向Pexel網站請求資料。使用者可以透過搜尋得到想要的圖片。
          </p>
          <a
            href="https://github.com/james-chiou/picture-search-website"
            target="_blank"
            rel="noreferrer noopenner"
            class="btn btn-primary btn-lg"
          >
            Github
          </a>
        </div>
      </div>
      <div className="ps-3 pt-2 bg-light rounded-3">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold fs-2">聯絡方式</h1>
          <p className="col-md-8 fs-4 mb-0">作者: 邱泓叡</p>
          <p className="col-md-8 fs-4 mt-0">
            信箱: hongjuichiou.james@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
