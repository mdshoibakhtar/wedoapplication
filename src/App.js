import { TopNavigation } from "./components/navBar/topNavigation";

import "./components/assests/style/style.css"
import Home from "./Pages";
import { Footsec } from "./components/footerSection/FootSec";


function App() {
  return (
    <div className="d-sm-block d-md-none d-xl-none">
      <TopNavigation />
      <Home />
      <Footsec />
    </div>
  );
}

export default App;
