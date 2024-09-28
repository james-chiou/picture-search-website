import React from "react";

const About = () => {
  return (
    <main>
      <div className="ps-3 bg-light rounded-3">
        <div className="container-fluid py-3">
          <h1 className="display-6 fw-bold">Project 8 - 圖片搜尋網站</h1>
          <ul class="list-unstyled">
            <li class="col-md-10 fs-5">
              本專案使用:
              <ol>
                <li class="col-md-10 fs-5 my-2">
                  React.js
                  作為前端框架、以及axios套件處理AJAX來向第三方網站請求資料。
                </li>
                <li class="col-md-10 fs-5 my-2">
                  圖片來源為圖片免費授權的Pexels網站。向Pexels申請API
                  Key後，根據Pexels API規範來設定參數。例如:API
                  URL中的頁數、每頁顯示照片數量等。
                </li>
                <li class="col-md-10 fs-5">
                  再透過axios套件向Pexel網站請求資料，讓使用者可以透過搜尋得到想要的圖片。
                </li>
              </ol>
            </li>
          </ul>
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
          <h1 className="fw-bold fs-2">聯絡方式</h1>
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
