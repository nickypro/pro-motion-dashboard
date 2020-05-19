const express = require('express')
const path = require('path');
const app = express();

//app
app.use(express.static(path.join(__dirname, 'build')));

//send react app
app.get('/dashboard/:slug', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/dashboard/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((req, res, next) => {
  res.redirect('/dashboard')
})

// we will host the app on http as well
app.listen(3000, () => console.log(`HTTP  Listening on port 3000`) );
