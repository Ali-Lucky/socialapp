const express = require('express');
const format = require('date-format');
const app = express();

const PORT = 4000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/api/v1/insta', (req, res) => {
    const instaData = {
        username: "Lucky",
        followers: 120,
        follows: 251,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };
    res.status(200).json(instaData);
});

app.get('/api/v1/fb', (req, res) => {
    const fbData = {
        username: "Ali",
        followers: 514,
        follows: 568,
        date: format.asString("yyyy/MM/dd, hh:mm:ss", new Date())
    };
    res.status(200).json(fbData);
});

app.get('/api/v1/linkedin', (req, res) => {
    const linkedinData = {
        username: "Lucky Ali",
        followers: 400,
        follows: 854,
        date: format('dd-MM-yy hh:mm', new Date())
    };
    res.status(200).json(linkedinData);
});

app.get('/api/v1/:token', (req, res) => {
    res.json({ name: req.params.token });
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});