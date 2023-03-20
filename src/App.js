import { TopNavigation } from "./components/navBar/topNavigation";
import "./components/assests/style/style.css"
import { Wrapper } from "./components/mainSection/wrapper/Wrapper";
import { CircleCard } from "./components/circleCard/CircleCard";
import { BigSlaeWrapper } from "./components/bigSalePannel/BigSaleWrapper";
import { ProductsCards } from "./components/productsCards/ProductsCards";
import { CardCarousel } from "./components/cardSlider/CardCarousel";
import { ProductCarousel } from "./components/cardSlider/ProductCarousel";

function App() {
  return (
    <div className="d-sm-block d-md-block d-xl-none">
      <TopNavigation />
      <Wrapper />
      <CircleCard />
      <BigSlaeWrapper />
      <ProductsCards />
      <CardCarousel />
      <ProductCarousel />
    </div>
  );
}

export default App;
