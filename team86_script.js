var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/team86_index.html'));
});

app.get('/team86_admin', (req, res) => {
    res.sendFile('./team86_admin.html', { root: __dirname });
});

app.get('/team86_findcomp', (req, res) => {
    res.sendFile('./team86_findcomp.html', { root: __dirname });
});

app.get('/team86_finduser', (req, res) => {
    res.sendFile('./team86_finduser.html', { root: __dirname });
});

app.get('/team86_findvideo', (req, res) => {
    res.sendFile('./team86_findvideo.html', { root: __dirname });
});

app.get('/team86_submitvid', (req, res) => {
    res.sendFile('./team86_submitvid.html', { root: __dirname });
});

app.get('/team86_newprof', (req, res) => {
    res.sendFile('./team86_newprof.html', { root: __dirname });
});

app.get('/team86_myprof', (req, res) => {
    res.sendFile('./team86_myprof.html', { root: __dirname });
});

app.get('/team86_viewvideo', (req, res) => {
    res.sendFile('./team86_viewvideo.html', { root: __dirname });
});

app.listen(35642);