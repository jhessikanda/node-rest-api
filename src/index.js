const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

require('./controllers/authController')(app);
/*app.get('/', (req, resp) => {
	resp.send('OK');
});*/

app.listen(3000);