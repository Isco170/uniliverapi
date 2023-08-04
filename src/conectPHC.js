var Connection = require('tedious').Connection;
var config = {
    server: '11.3.0.3\\TPGLPHC',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'fmavie', //update me
            password: 'Luquinha@2022'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'TROPIGALIA_E28S140bd'  //update me
    }
};
var connection = new Connection(config);
connection.on('connect', function (err) {
    // If no error, then good to proceed.
    console.log("Connected");
});

print('P')
connection.connect();