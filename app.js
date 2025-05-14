const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 配置根路由
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// 配置其他路由
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
