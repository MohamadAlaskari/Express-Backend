const express = require('express');
const app = express();
const routes = require('./routes');
//const dbMongo = require('./config/dbMongo');
//const dbMySQL = require('./config/dbMySQL');

app.use(express.json());
app.use('', routes);

// Zentrale Fehlerbehandlung
app.use(require('./middleware/errorHandler'));

//dbMongo.connect();
//dbMySQL.connect();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/ 🔥`);
});

