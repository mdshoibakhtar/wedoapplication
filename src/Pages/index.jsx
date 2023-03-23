import { BigSlaeWrapper } from "../components/bigSalePannel/BigSaleWrapper";
import { CardCarousel } from "../components/cardSlider/CardCarousel";
import { ProductCarousel } from "../components/cardSlider/ProductCarousel";
import { CircleCard } from "../components/circleCard/CircleCard";
import { Footsec } from "../components/footerSection/FootSec";
import { Wrapper } from "../components/mainSection/wrapper/Wrapper";
import { TopNavigation } from "../components/navBar/TopNavigation";
import { ProductsItemList } from "../components/productItem/ProductsItemList";
import { ProductsCards } from "../components/productsCards/ProductsCards";
import { TopSectionCard } from "../components/topSectionCard/TopSectionCard";

const productdHeaderTitle = "Product Item";
const sugestedHeaderTitle = "Sugested for you";

function Home() {
  return (
    <div>
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
      <Footsec />
    </div>
  );
}
export default Home;
