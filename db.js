const Pool= require('pg').Pool

const pool = new Pool({
    user: "admin",
    host: "postgres://admin:EeI3IwBJb6YywcCvPWmSV2z9PtRWba83@dpg-ce9doq82i3ms2102ae6g-a.oregon-postgres.render.com/gta_gs2d",
    database:"gta_gs2d",
    password:"EeI3IwBJb6YywcCvPWmSV2z9PtRWba83",
    port:5432
});

module.exports = pool;
