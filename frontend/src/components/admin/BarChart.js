import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';

export default function BarChart({ data }) {
    const chartRef = useRef();

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                    }],
                },
                // Cấu hình options của biểu đồ
            }
        });

        // Trả về một hàm cleanup để hủy biểu đồ khi component unmount
        return () => {
            myChart.destroy();
        };
    }, [data]);

    return <canvas ref={chartRef} />;
}
