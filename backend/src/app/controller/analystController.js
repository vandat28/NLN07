const analystService = require('../service/analystService')
const moment = require('moment');
class analystController {

    async analystIn7Days(req, res) {
        try {
            const currentDate = new Date();

            // Mảng để lưu trữ các ngày trong khoảng thời gian
            const dateList = [];

            // Lặp qua từng ngày trong khoảng thời gian từ ngày hiện tại đến 7 ngày trước đó
            for (let i = 0; i < 7; i++) {
                const date = new Date(currentDate);
                date.setDate(currentDate.getDate() - i);
                dateList.push(date.toISOString().slice(0, 10)); // Thêm ngày vào mảng với định dạng yyyy-mm-dd
            }

            // Hiển thị mảng các ngày
            console.log(dateList);
            const reversedDateList = dateList.reverse();


            let result = []
            for (const day of reversedDateList) {
                let total = await analystService.sumOrderInDay(day)
                if (total[0].ngay == null) {
                    total[0].ngay = day
                    total[0].tongtien = 0
                }
                result.push(total[0])
            }

            console.log(result);

            const formattedResult = result.map(item => ({
                ngay: moment(item.ngay).format('DD/MM'), tongtien: item.tongtien
            }));

            res.status(200).json(formattedResult);
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }
    }

    async countOrdersIn7Days(req, res) {
        try {
            let orders = await analystService.countOrdersIn7Days()
            console.log(orders)
            res.status(200).json(orders);
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json('Đã xảy ra lỗi:', error);
        }
    }

    async countOrdersPaidIn7Days(req, res) {
        try {
            const orders = await analystService.countOrdersPaidIn7Days()
            res.status(200).json(orders);
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json('Đã xảy ra lỗi:', error);
        }
    }


}
module.exports = new analystController()