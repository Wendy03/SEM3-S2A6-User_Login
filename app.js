// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
const userCheck = require('./user_check')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 使用 session 中介軟體
app.use(session({
  secret: 'secret', // 對session id 相關的cookie 進行簽名
  resave: true,
  saveUninitialized: false, // 是否儲存未初始化的會話
  cookie: {
    maxAge: 1000 * 60 * 5, // 設定 session 的有效時間，單位毫秒
  },
}));

// setting static files
app.use(express.static('public'))

// setting routes
app.get('/', (req, res) => {
  if (req.session.userName) {
    res.render('home', { userName: req.session.userName })
  } else {
    res.render('login')
  }
})

app.post('/', (req, res) => {
  const userInput = req.body
  const result = userCheck(userInput)
  const error = 'Username/Password 錯誤'
  if (result === undefined) {
    res.render('login', { error })
  } else {
    const userName = result.firstName
    req.session.userName = userName
    console.log(req.sessionID)
    res.render('home', { userName })
  }
})

app.get('/logout', function (req, res) {
  req.session.destroy()
  res.redirect('/')
});

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})