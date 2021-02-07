
const express = require('express');
const path = require('path')

const app = express();

const port = 8081;
const www = './src';

app.use(express.static(www));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))

console.log(`serving ${www}`);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: www });
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
