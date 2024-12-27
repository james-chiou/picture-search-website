# 照片搜尋網站
1. 本專案框架為React.js，提供使用者搜尋和下載照片
2. React Component包含
   1. 搜尋 (search.js)
   2. 圖片顯示 (picture.js)
4. 使用AJAX串接第三方網站API (串連的網站為[Pexel](https://www.pexels.com/zh-tw/))  
5. 所使用的API為:  
   1. 精選圖片 `https://api.pexels.com/v1/curated?page&per_page=15`
   2. 搜尋圖片 `https://api.pexels.com/v1/search?query&per_page=15&page`
   3. 其中page為當前頁數，per_page唯一頁顯示多少照片，query為搜尋得輸入值
6. 從API中可以得到:
   1. 照片的作者
   2. 照片的大小
   3. 照片的下載連結
7. 本專案使用[Render](https://render.com/)網站進行部署，前往[照片搜尋網站](https://picture-search-website-1.onrender.com)
## 問題
如何將search中useState的資料，顯示到picture component中?
1. 將useState以及AJAX串接API的操作，全部State Lifting到主頁(Home.js)來完成
2. 再將所有結果以props回傳到search.js和picture.js
