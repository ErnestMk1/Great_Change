const express = require('express');
const app = express();
const path = require('node:path');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../my-app/build")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM huma";
  db.query(sqlGet, (error, result) => {
    if (error) throw error;

    res.send(result);

    console.log('inserted successfuly');
  });
});

app.post("/api/insert", (req, res) => {
  const PIB = req.body.PIB;
  const address_until = req.body.address_until;
  const passport_ser = req.body.passport_ser;
  const address_now = req.body.address_now;

  const sqlStatement = "INSERT INTO huma (PIB, address_until, passport_ser, address_now) VALUES (?, ?, ?, ?)";
  db.query(sqlStatement, [PIB, address_until, passport_ser, address_now], (error, result) => {
    if (error) throw error;

    console.log(result);

    console.log('inserted successfuly');
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../my-app/build', 'index.html'));
});

app.listen(PORT, () => console.log(`server run at port ${PORT}`));
