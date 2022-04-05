import React from 'react';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div>
            <div className='d-flex justify-content-around mt-5 pb-5'>
                <div>
                    <h2>Monthly Sell</h2>
                    <LineChart width={450} height={400} data={data}>
                        <Line type={"monotone"} dataKey={'sell'}></Line>
                        <CartesianGrid stroke='#ccc' strokeDasharray={"5 5"}></CartesianGrid>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div>
                    <h2>Investment VS Revenue</h2>
                    <AreaChart width={530} height={400} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="investment" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>
            <div className='d-flex justify-content-around mt-5 mb-5'>
                <div>
                    <h2>Investment VS Revenue</h2>
                    <ComposedChart width={450} height={400} data={data}>
                        <XAxis dataKey="investment" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="investment" stroke="#ff7300" />
                    </ComposedChart>

                </div>
                <div>
                    <h2>Investment VS Revenue</h2>
                    <PieChart width={530} height={400}>
                        <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>

                </div>
            </div>

        </div>


    );
};

export default DashBoard;