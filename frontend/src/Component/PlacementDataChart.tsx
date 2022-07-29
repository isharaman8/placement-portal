import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

const PlacementDataChart = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="text-center font-bold text-3xl pb-5">
          Student Placement Data Chart{" "}
        </h1>

        <h1 className="font-semibold text-2xl pb-1">Higher CTC : 25,000,00₹</h1>
        <h2 className="font-semibold text-2xl pb-20">Avg CTC : 800,000₹</h2>
        <Chart
          type="pie"
          width={600}
          height={600}
          series={[50, 20, 30]}
          options={{
            labels: ["Placed", "Not Placed", "In Process"],
          }}
        />
      </div>
    </div>
  );
};

export default PlacementDataChart;
