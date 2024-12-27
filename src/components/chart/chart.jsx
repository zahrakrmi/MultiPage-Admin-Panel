import { LineChart } from '@mui/x-charts/LineChart';

 const dataset = [
  { x: 1, y: 2 },
  { x: 2, y: 5.5 },
  { x: 3, y: 2 },
  { x: 5, y: 8.5 },
  { x: 8, y: 1.5 },
  { x: 10, y: 5 },
];
export default function GridDemo() {
  return (
    <LineChart
    sx={{
      '& .MuiLineElement-root': {
        strokeDasharray: '5',
        strokeWidth: 10,
      },
      '& .MuiAreaElement-series-Germany': {
        fill: "url('#myGradient')",
      },
    }}
      dataset={dataset}
      xAxis={[{ dataKey: 'x' }]}
      series={[{ dataKey: 'y' }]}
      height={300}
      width={350}
      margin={{ left: 20, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}
