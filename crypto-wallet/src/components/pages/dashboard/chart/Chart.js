import { Chart } from "react-google-charts";
export const data = [
  ["Ano", "Compras", "Vendas"],
  ["2008", 2000, 460],
  ["2012", 1170, 460],
  ["2016", 660, 1120],
  ["2020", 1030, 540],
];

export const options = {
  title: "Variação BTC",
  curveType: "function",
  legend: { position: "bottom" },
};

const Charts = () => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
export default Charts;
