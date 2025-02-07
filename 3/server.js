var express = require('express');
var app = express();
const cors = require("cors");
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET","POST","DELETE","PUT"]
}));
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(__dirname));
app.listen(app.get('port'), function() {
console.log('Server started: http://localhost:' + app.get('port') + '/');
});