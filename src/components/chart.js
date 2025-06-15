"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "1월", value: 400000 },
    { name: "2월", value: 700000 },
    { name: "3월", value: 950000 },
    { name: "4월", value: 1200000 },
    { name: "5월", value: 1600000 },
    { name: "6월", value: 1876580 },
];

// 숫자를 통화 형식(반점 포함)으로 변환하는 함수
function formatCurrency(value) {
    return value.toLocaleString("ko-KR") + "원";
}

export default function Chart() {
    return (
        <div style={{ width: "100%", height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis hide />
                    <Tooltip
                        formatter={(value) => [formatCurrency(value), "수익"]}
                        labelFormatter={(label) => `${label}`}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#0f766e"
                        strokeWidth={2}
                        dot={false}
                        name="수익"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
