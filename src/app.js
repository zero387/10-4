const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

// Hàm đọc dữ liệu từ tệp JSON
function readData() {
    return JSON.parse(fs.readFileSync('./data/db.json'));
}

app.get('/', (req, res) => {
    const data = readData();
    res.send(data);
});

app.get('/data', (req, res) => {
    console.log("fdsa", req.body);
    const { email, password } = req.body;
    const newdata = {
        email: email,
        password: password
    };
    const data = readData();
    data.push(newdata); 
    fs.writeFileSync('./data/db.json', JSON.stringify(data)); 
    res.render('input',{data});
});
app.get('/delete/:id',(req,res) => {
        const id = req.params;
        let data = readData()
        data.splice(id,1);
        fs.writeFileSync('./data/db.json', JSON.stringify(data));
        res.redirect('http://localhost:4000/Data')
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
