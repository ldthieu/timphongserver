var app = require('./config/dependencies');

app.listen(process.env.PORT || 5000, () => {
    console.log('listenning in port: ' + process.env.PORT);
});