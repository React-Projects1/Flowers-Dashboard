import React, { useState } from 'react';
import './line.scss';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const LineChartComponent = () => {
    const dataByDate = {
        "2025-01-16": [
            { name: "Jan", sales: 3000 },
            { name: "Feb", sales: 4000 },
            { name: "Mar", sales: 5000 },
            { name: "Apr", sales: 6000 },
            { name: "May", sales: 7000 },
            { name: "Jun", sales: 8000 },
        ],
        "2024-12-25": [
            { name: "Jan", sales: 2500 },
            { name: "Feb", sales: 3200 },
            { name: "Mar", sales: 4100 },
            { name: "Apr", sales: 4700 },
            { name: "May", sales: 5300 },
            { name: "Jun", sales: 6100 },
        ],
        "2024-06-15": [
            { name: "Jan", sales: 1800 },
            { name: "Feb", sales: 2900 },
            { name: "Mar", sales: 3600 },
            { name: "Apr", sales: 4200 },
            { name: "May", sales: 4800 },
            { name: "Jun", sales: 5600 },
        ],
    };

    const [selectedDate, setSelectedDate] = useState("2025-01-16");
    const [chartData, setChartData] = useState(dataByDate["2025-01-16"]);

    const handleDateChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
        setChartData(dataByDate[date]);
    };

    return (
        <div className="lineChartContainer">

            <div className='d-flex justify-content-between align-items-center mb-4 ms-3'>
                <h4 className='m-0'>Sales Growth</h4>
                <select value={selectedDate} onChange={handleDateChange}>
                    <option value="2025-01-16">2025-01-16</option>
                    <option value="2024-12-25">2024-12-25</option>
                    <option value="2024-06-15">2024-06-15</option>
                </select>
            </div>

            <ResponsiveContainer width="100%" height={250}>
                <LineChart
                    data={chartData}
                    margin={{ top: 5, right: 8, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="0 0" stroke="#E3E2E0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#B22222"
                        strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default LineChartComponent;
