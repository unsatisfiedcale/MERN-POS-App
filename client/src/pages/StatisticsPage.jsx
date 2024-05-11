import * as React from "react";
import Header from "../components/header/Header";
import StatisticsCard from "../components/statistics/StatisticsCard";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

const StatisticsPage = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("https://assets.antv.antgroup.com/g2/stocks.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const data2 = [
    {
      type: "分类一",
      value: 27,
    },
    {
      type: "分类二",
      value: 25,
    },
    {
      type: "分类三",
      value: 18,
    },
    {
      type: "分类四",
      value: 15,
    },
    {
      type: "分类五",
      value: 10,
    },
    {
      type: "其他",
      value: 5,
    },
  ];

  const lineChartConfig = {
    data,
    xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
    series: [{ data: [2, 5.5, 2, 8.5, 1.5, 5], area: true }],
    width: 570,
    height: 370,
  };

  const pieChartConfig = {
    series: [
      {
        data: data2,
        highlightScope: { faded: "global", highlighted: "item" },
        faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
      },
    ],
    height: 370,
  };

  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistikler</h1>

        <div className="statistics-section">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>.
          </h2>
          <div className="statics-card grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-2">
            <StatisticsCard
              title={"Toplam Müşteri"}
              amount={"7"}
              img={"/images/user.png"}
            />
            <StatisticsCard
              title={"Toplam Kazanç"}
              amount={"1706.23 ₺"}
              img={"/images/money.png"}
            />
            <StatisticsCard
              title={"Toplam Satış"}
              amount={"2"}
              img={"/images/sale.png"}
            />
            <StatisticsCard
              title={"Toplam Ürün"}
              amount={"33"}
              img={"/images/product.png"}
            />
          </div>
        </div>
        <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
              <div className="lg:w-1/2 lg:h-80 h8h-80">
            <LineChart {...lineChartConfig} />
          </div>

          <div className="lg:w-1/2 lg:h-70 h-62">            <PieChart {...pieChartConfig} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsPage;
