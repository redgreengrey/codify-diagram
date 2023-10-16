'use client';
import { useState } from "react";
import Dropdown from "@/app/components/dropdown/Dropdown";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import style from './diagram.module.css';
import { fakeData, monthData, fakeChartData, dropdownOptions } from '@/app/helpers'

const Diagram = () => {
    const [val, setVal] = useState('За последний месяц');
    const [currentData, setCurrentData] = useState(monthData);

    const onChange = (e) => {
        setCurrentData(fakeData[e]);
        setVal(e);
    }

    return (
        <div className={style.diagram}>
            <Dropdown
                value={val}
                onChange={onChange}
                options={dropdownOptions}/>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        width: 1000,
                        height: 400,
                    },
                    title: {
                        text: '',
                    },
                    series: [{
                        data: currentData,
                        type: 'column',
                    }],
                    xAxis: {
                        lineColor: "transparent",
                        categories: fakeChartData[val],
                        fontSize: 20,
                        tickLength: 0,
                        labels: {
                            step: 1,
                            style: {
                                font: '20px Manrope, sans-serif'
                            },
                        }
                    },
                    yAxis: {
                        title: '',
                        gridLineWidth: 0,
                        offset: 50,
                        labels: {
                            format: '{value}',
                            style: {
                                font: '20px Manrope, sans-serif',
                            },
                            align: 'left',
                            distance: 10,
                        }
                    },
                    tooltip: {
                        backgroundColor: '#65FF8E',
                        shape: "square",
                        style: {
                            padding: 0
                        },
                        formatter: function () {
                            return '<span>' + this.y + '</span>'
                        }
                    },
                    legend: {
                        enabled: false,
                    },
                    credits: {
                        enabled: false
                    },
                    borderWidth: 0,

                    plotOptions: {
                        series: {
                            pointWidth: 16,
                            color: '#000AFF',
                        }
                    },
                }}
            />
        </div>
    )
}

export default Diagram;