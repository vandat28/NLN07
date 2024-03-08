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

    createCustomer(hoten, diachi, gioitinh, namsinh, sodienthoai) {
        return new Promise((resolve, reject) => {
            con.query(`INSERT INTO khachhang(hoten, diachi, gioitinh, namsinh, sodienthoai) VALUES ('${hoten}', '${diachi}', '${gioitinh}', '${namsinh}', '${sodienthoai}');`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    findOneByPhoneNumber(phoneNumber) {
        return new Promise((resolve, reject) => {
            con.query(`select * from khachhang where sodienthoai = ${phoneNumber};`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    createAccount(sodienthoai, matkhau, maKH) {
        return new Promise((resolve, reject) => {
            con.query(`INSERT INTO taikhoan(soDienThoai, matKhau, vaiTro, maKH) VALUES ('${sodienthoai}', '${matkhau}', 0, ${maKH});`, function (error, result, fields) {
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