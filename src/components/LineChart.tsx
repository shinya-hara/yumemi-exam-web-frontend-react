import { FC, ReactNode } from 'react';
import {
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface Props {
  children: ReactNode;
  data: { [key: string]: number }[];
  xAxisDataKey?: string;
}

/**
 * チャートの線の色を表示項目数に応じていい感じに算出する
 * @param index
 */
export const getChartLineColor = (dataCount: number, index: number) => {
  const hue = (360 /* degree */ / dataCount) /* 表示項目数 */ * index;
  return `hsl(${hue}, 60%, 60%)`;
};

export const LineChart: FC<Props> = ({ children, data, xAxisDataKey }) => {
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
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {children}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};
