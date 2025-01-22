import React, { useRef, useEffect, useState } from 'react';
import './bar.scss';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';

function BarChartComponent() {
    const data = [
        { name: "Jan", revenue: 250, expenses: 150 },
        { name: "Feb", revenue: 300, expenses: 220 },
        { name: "Mar", revenue: 350, expenses: 250 },
        { name: "Apr", revenue: 270, expenses: 200 },
        { name: "May", revenue: 320, expenses: 240 },
    ];

    const [chartWidth, setChartWidth] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (containerRef.current) {
                setChartWidth(containerRef.current.offsetWidth);
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                padding: '15px',
                backgroundColor: '#fdfdfd',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
                marginTop: '25px',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h4 style={{ margin: 0, color: '#B22222' }}>Statistics</h4>
                <select
                    style={{
                        padding: '5px 10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                >
                    <option value="1-5/2024">1-5/2024</option>
                    <option value="6-10/2024">6-10/2024</option>
                </select>
            </div>

            <BarChart
                width={chartWidth}
                height={250}
                data={data}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend
                    wrapperStyle={{
                        fontSize: '12px',
                        color: '#555',
                        marginTop: '-10px',
                    }}
                />
                <Bar dataKey="revenue" fill="#f08c8c" name="Revenue" />
                <Bar dataKey="expenses" fill="#888888" name="Expenses" />
            </BarChart>
        </div>
    );
}

export default BarChartComponent;
