const express    = require('express');
const bodyParser = require('body-parser');
const port       = process.env.PORT || 3000;
const app        = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
