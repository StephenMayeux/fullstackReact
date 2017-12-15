const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(logger('combined'));
app.use(cors());

app.get('/data', (req, res) => {
  const results = [
    {
      title: 'Shawshank Redemption',
      rating: 9
    },
    {
      title: 'Justice League',
      rating: 7
    },
    {
      title: 'Old Boy',
      rating: 8
    }
  ];
  res.send({ success: true, results });
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log('Express server running on port', port);
});
