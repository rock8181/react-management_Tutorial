const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id' : 1,
        'image' : 'https://placeimg.com/64/64/any',
        'name' : 'jeonsanggyun',
        'birth' : '961222-1234567',
        'gender' : '남자',
        'job' : '대학생'
        },
        {
          'id' : 2,
          'image' : 'https://placeimg.com/64/64/any',
          'name' : 'test',
          'birth' : 'test-1234567',
          'gender' : '남자',
          'job' : '대학생'
        },
        {
        'id' : 3,
        'image' : 'https://placeimg.com/64/64/any',
        'name' : 'rwrhjwrh',
        'birth' : 'test-wehewh',
        'gender' : '남자',
        'job' : '대학생'
        }
      ]);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
