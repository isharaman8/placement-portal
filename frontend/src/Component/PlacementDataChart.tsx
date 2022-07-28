import ApexCharts from "apexcharts"
import Chart from "react-apexcharts";

const PlacementDataChart = () => {
  return (
    <div>
      <h1>Placement Data Chart</h1>
      <Chart
        type="pie"
        width={600}
        height={600}
series={[50,60]}
      />
    </div>
  )
}

export default PlacementDataChart
