import { TopNavigation } from "./components/navBar/topNavigation";
import { Wrapper } from "./components/mainSection/wrapper/Wrapper";
import { CircleCard } from "./components/circleCard/CircleCard";
import { BigSlaeWrapper } from "./components/bigSalePannel/BigSaleWrapper";
import { ProductsCards } from "./components/productsCards/ProductsCards";
import { CardCarousel } from "./components/cardSlider/CardCarousel";
import { ProductCarousel } from "./components/cardSlider/ProductCarousel";

import "./components/assests/style/style.css"
import { ProductsItemList } from "./components/productItem/ProductsItemList";
import { TopSectionCard } from "./components/topSectionCard/TopSectionCard";

const productdHeaderTitle = "Product Item"
const sugestedHeaderTitle = "Sugested for you"
function App() {
  return (
    <div className="d-sm-block d-md-none d-xl-none">
      <TopNavigation />
      <Wrapper />
      <CircleCard />
      <BigSlaeWrapper />
      <ProductsCards data={sugestedHeaderTitle} />
      <CardCarousel />
      <ProductCarousel />
      <ProductsCards data={productdHeaderTitle} />
      <ProductsItemList />
      <TopSectionCard />
    </div>
  );
}

export default App;
