const path=require('path');

require('dotenv').config({path:path.join(__dirname,'../../.env')});
exports.PORT=process.env.PORT || 4000;
exports.DB_URL=process.env.DB_URL;
exports.KEY=process.env.KEY;