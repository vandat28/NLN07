const con = require('../configdb/connectDB')

class feedbackService {

    findAll() {
        return new Promise((resolve, reject) => {
            con.query(` SELECT d.*, k.hoten FROM healpro.danhgia d
            inner join healpro.taikhoan t on d.maTK = t.maTK
            inner join healpro.khachhang k on t.maKH = k.maKH;`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    findAllById(id) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT d.*, k.hoten FROM healpro.danhgia d
            inner join healpro.taikhoan t on d.maTK = t.maTK
            inner join healpro.khachhang k on t.maKH = k.maKH
            where d.maSP = ${id};`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }
    createFeedBack(binhluan, mucdanhgia, masp, matk) {
        return new Promise((resolve, reject) => {
            con.query(`INSERT INTO danhgia(binhLuan, mucDanhGia, maSP, maTK) VALUES ('${binhluan}', ${mucdanhgia}, ${masp}, ${matk});`, function (error, result, fields) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        })
    }

    // findOneByPhoneNumber(phoneNumber) {
    //     return new Promise((resolve, reject) => {
    //         con.query(`select * from khachhang where sodienthoai = ${phoneNumber};`, function (error, result, fields) {
    //             if (error) {
    //                 reject(error);
    //                 return;
    //             }
    //             resolve(result);
    //         });
    //     })
    // }

    // createAccount(sodienthoai, matkhau, maKH) {
    //     return new Promise((resolve, reject) => {
    //         con.query(`INSERT INTO taikhoan(soDienThoai, matKhau, vaiTro, maKH) VALUES ('${sodienthoai}', '${matkhau}', 0, ${maKH});`, function (error, result, fields) {
    //             if (error) {
    //                 reject(error);
    //                 return;
    //             }
    //             resolve(result);
    //         });
    //     })
    // }




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

module.exports = new feedbackService()