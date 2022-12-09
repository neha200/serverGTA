const Pool= require('pg').Pool

const pool = new Pool({
    postgres://admin:EeI3IwBJb6YywcCvPWmSV2z9PtRWba83@dpg-ce9doq82i3ms2102ae6g-a/gta_gs2d
});

module.exports = pool;
