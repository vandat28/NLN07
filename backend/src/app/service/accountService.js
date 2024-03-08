const con = require('../configdb/connectDB')

class accountService {

    findAll() {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM taikhoan a, khachhang b
            where a.maKH = b.maKH;`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    create(hoten, diachi, gioitinh, namsinh, sodienthoai, matKhau) {
        return new Promise((resolve, reject) => {
            con.query(`INSERT INTO giohang(tongTien) VALUES ('0');
             INSERT INTO khachhang(hoten, diachi, gioitinh, namsinh, sodienthoai) VALUES ('${hoten}', '${diachi}', '${gioitinh}', '${namsinh}', '${sodienthoai}');
             INSERT INTO taikhoan(soDienThoai, matKhau) VALUES ('${sodienthoai}', '${matKhau}');`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    // update(newCategoryName, id) {
    //     return new Promise((resolve, reject) => {
    //         con.query(`UPDATE loaisanpham
    //         SET tenLoai = '${newCategoryName}'
    //         WHERE id = ${id};`, function (error, result, fields) {
    //             if (error) {
    //                 reject(error);
    //                 return;
    //             }
    //             resolve(result);
    //         });
    //     })
    // }

    // delete(id) {
    //     return new Promise((resolve, reject) => {
    //         con.query(`delete from loaisanpham where id = ${id}`, function (error, result, fields) {
    //             if (error) {
    //                 reject(error);
    //                 return;
    //             }
    //             resolve(result);
    //         });
    //     })
    // }


}

module.exports = new accountService()