const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//serve up files
app.use(express.static('server/public'));

// listen
app.listen(PORT, () => {
    console.log('app running on PORT: ', PORT);
})