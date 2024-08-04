import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import CartTotals from "../components/cart/CartTotals";
const HomePage = () => {

  const [ categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5001/server/categories/get-category");
        const data = await res.json();
        data &&
        setCategories(
          data.map((item) => {
            return { ...item, value: item.title };
          })
        );      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  return (
    <>
          <Header />
          <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24 h-screen">
            <div className="categories  
            overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
          <Categories categories={categories} setCategories={setCategories} />
            </div>
            <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
            <Products categories={categories} />
            </div>
            <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
              <CartTotals />
            </div>
          </div>
    </>
  )
}

export default HomePage
