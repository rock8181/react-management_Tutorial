const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'name': 'John',
            'email': 'rock@naver.com',
            'phone': '010-1234-5678',            
            'image' : 'https://randomuser.me/api/portraits/'
        },
        {
            'id': 2,
            'name': 'mary',
            'image' : 'https://randomuser.me/api/portraits/',
            'email': 'rock@naver.com',
            'phone': '010-1234-5678',            
            'image' : 'https://randomuser.me/api/portraits/'
        }
        ]);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
