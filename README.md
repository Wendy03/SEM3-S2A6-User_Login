# Account Login

##### 此專案測試帳號密碼登入成功顯示登入頁面，使用者在時間內沒登出再次進入網頁不需要重新登入

## Installing

##### 環境

```
- node.js v-10.15.0
- nodemon
- Express
- Express-Handlebars
- Express-Session
- body-parse

```

##### 1.開啟終端機到存放專案本機位置並執行:

`git clone https://github.com/Wendy03/SEM3-S2A6-User_Login.git`

##### 2.初始

```
1.切換目錄到專案: cd SEM3-S2A6-User_Login
2.安裝套件: npm install
```

##### 3.執行程式

```
1. 終端機輸入: nodemon app.js
2. 開啟網頁輸入: http://localhost:3000
```

## 主要功能

##### 1.使用者輸入帳密：email & password

##### 2.如果找不到 username，或是 password 錯誤，介面會顯示 "Username/Password 錯誤"

##### 3.如果 username + password 組合正確，使用者就能成功登入，並導向自己的 welcome page

##### 4.在時間內使用者沒有登出，再次進入網頁不需要重新登入

## 測試帳密

| First Name | email               | email            |
| ---------- | ------------------- | ---------------- |
| Tony       | tony@stark.com      | iamironman       |
| Steve      | captain@hotmail.com | icandothisallday |
| Peter      | peter@parker.com    | enajyram         |
| Natasha    | natasha@gamil.com   | \*parol#@\$!     |
| Nick       | nick@shield.com     | password         |
