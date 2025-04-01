'use client';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

type SemesterChartProps = {
    data: { semester: string; rating: number }[];
};

export const SemesterChart = ({ data }: SemesterChartProps) => (
    <div>
        <h3 className="text-sm font-medium mb-4">Nota média por semestre</h3>
        <div className="h-64 w-full bg-white rounded-lg p-4 border">
            <ResponsiveContainer
                width="100%"
                height="100%"
            >
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="semester"
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        domain={[0, 4]}
                        ticks={[0, 1, 2, 3, 4]}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className="bg-white p-2 border shadow-sm rounded">
                                        <p className="text-sm">{`${payload[0].payload.semester}: ${payload[0].value}`}</p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="rating"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                        activeDot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
);
