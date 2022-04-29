require('dotenv').config();

const app = require('./app');
require('./config/database');


async function main(){
    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'));
}

main();