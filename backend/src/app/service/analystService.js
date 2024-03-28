const con = require('../configdb/connectDB')

class analystService {

    findOrderIn7Days() {
        return new Promise((resolve, reject) => {
            con.query(`SELECT DATE(ngayDat) as ngay FROM healpro.donhang 
            where ngayDat >= DATE_SUB(NOW(), INTERVAL 7 DAY) group by DATE(ngayDat);`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }


    sumOrderInDay(day) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT DATE(ngayDat) as ngay, SUM(tongTien) AS tongtien
            FROM donhang
            WHERE DATE(ngayDat) = '${day}' and tinhTrangThanhToan = 1;`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

}

module.exports = new analystService()