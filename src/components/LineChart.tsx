import { FC } from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface Props {
  data: any[];
}

export const LineChart: FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={400}>
      <RechartsLineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="A" stroke="#82ca9d" />
        <Line type="monotone" dataKey="B" />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};
