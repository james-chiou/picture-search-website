# 照片搜尋網站
1. 本專案框架為React.js
2. 使用AJAX串接第三方網站API (串連的網站為[Pexel](https://www.pexels.com/zh-tw/))  
3. 所使用的API為:  
   1. 精選圖片 `https://api.pexels.com/v1/curated?page&per_page=15`
   2. 搜尋圖片 `https://api.pexels.com/v1/search?query&per_page=15&page`
   3. 其中page為當前頁數，per_page唯一頁顯示多少照片，query為搜尋得輸入值
4. 從API中可以得到:
   1. 照片的作者
   2. 照片的大小
   3. 照片的下載連結
5. 本專案使用[Render](https://render.com/)網站進行部署
