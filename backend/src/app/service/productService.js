const con = require('../configdb/connectDB')

class productService {

    findALl() {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM sanpham`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    create() {
        return new Promise((resolve, reject) => {
            con.query(`INSERT INTO table_name
            VALUES (value1, value2, value3, ...);`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    update() {
        return new Promise((resolve, reject) => {
            con.query(`UPDATE table_name
            SET column1 = value1, column2 = value2, ...
            WHERE condition;`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            con.query(`delete from sanpham where maSP = ${id}`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }


}

module.exports = new productService()