nextjs-github-page-example-typescript
===
This project is update from old project [old project](https://github.com/jianan1104/nextjs-github-page-example) 

Update:
- Javascript -> Typescript
- Using Redux
- Add skeleton

This is a [Next.js](https://nextjs.org/) project for simulating [Github](https://github.com/) user and repository page using by github API.

## Getting Started

```bash
git clone https://github.com/jianan1104/nextjs-github-page-example-typescript.git
cd nextjs-github-page-example-typescript
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Visit Dcard page
http://localhost:3000/users/Dcard/repos

- Visit yarn-plugins page of Dcard
http://localhost:3000/users/Dcard/repos/yarn-plugins


## Demo

https://nextjs-github-page-example-typescript.vercel.app/

## Project structure:
```
.
├── components  元件庫
│   ├── About   關於區塊
│   ├── ButtonCard  首頁按鈕卡片
│   ├── Menu    菜單
│   ├── Readme  說明元件
│   ├── RepositoryContent 倉儲內容
│   ├── RepositoryHeader  倉儲頭部
│   ├── RepositoryList  倉儲列表
│   └── RepositoryMenu  倉儲菜單
├── hooks   存放自訂hooks
├── modules 工具
├── pages
│   └── _app.tsx    通用頁面
│   └── _error.tsx  錯誤頁面
│   └── index.tsx   首頁
│   └── users
│       └── repos.tsx   用戶倉儲頁面
│       └── [username]
│           └── repos   
│               └── [repo].tsx  單一倉儲頁面
├── public  靜態圖片
└── state   狀態管理
    ├── action-type
    ├── actions
    ├── actions-creator
    └── reducers
```
## Overview
This project can visit any user or repository page of Github resource.

- Desktop
![](https://i.imgur.com/HtD7Bxu.png)
![](https://i.imgur.com/1QOhic5.png)
![](https://i.imgur.com/yLehl3b.png)

- Mobile
![](https://i.imgur.com/3yie7r5.png)
![](https://i.imgur.com/TOW9nCb.png)
![](https://i.imgur.com/wOIqCly.png)

## Developement/Testing Env
### OS
- MacOS 12.2.1
### Developing Language
- Typescript 4.6.2
### Framework
- React 17.0.2
- Next.js 12.1.0
- semantic-ui 2.1.1



## To do 
- Add input to search user or repository


