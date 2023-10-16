'use client';
import React from "react";
import Bar from "./Bar";
import style from './barChart.module.css';

const BarChart = ({ data }) => {
    const barWidth = 16;
    let barMargin = 10;
    const plotHeight = 400;

    console.log(data)

    const getChartData = (data) => {
        if (data.length === 6) {
            barMargin = 133;
        } if (data.length === 12) {
            barMargin = 55;
        }

        return data.map((value, index) => {
            let x = index * (barWidth + barMargin);

            return (
                <Bar
                    key={index}
                    x={x}
                    y={plotHeight - value * 0.07}
                    width={16}
                    height={value*0.07}
                />
            );
        });
    };

    return (
        <svg id="chart" width="800" height={plotHeight} className={style["chart-canvas"]}>
            {getChartData(data)}
        </svg>
    );
};

export default BarChart;
