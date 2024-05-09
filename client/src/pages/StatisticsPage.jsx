import Header from "../components/header/Header";
import StatisticsCard from "../components/statistics/StatisticsCard";
const StatisticsPage = () => {
  
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
       <StatisticsCard title={"Toplam Müşteri"} amount={"7"} img={"/images/user.png"}/>
       <StatisticsCard title={"Toplam Kazanç"} amount={"1706.23 ₺"} img={"/images/money.png"}/> 
       <StatisticsCard title={"Toplam Satış"} amount={"2"} img={"/images/sale.png"}/> 
       <StatisticsCard title={"Toplam Ürün"} amount={"33"} img={"/images/product.png"}/> 
      </div>
      </div>
      </div>
      
    </>
  );
};

export default StatisticsPage;
