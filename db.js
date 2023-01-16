const Pool= require('pg').Pool
const connectionString = "postgres://admin:EeI3IwBJb6YywcCvPWmSV2z9PtRWba83@dpg-ce9doq82i3ms2102ae6g-a.oregon-postgres.render.com/gta_gs2d"

const pool = new Pool({
    connectionString:connectionString,
    ssl:true
});

module.exports = pool;
