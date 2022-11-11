import { Chart } from "react-google-charts";
export const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 2000, 460],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
];

export const options = {
    title: "Crypto Performance",
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
        />)
}
export default Charts;