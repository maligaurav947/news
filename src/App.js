import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./dist/css/Main.css";
import Marquee from "react-fast-marquee";
function App() {
  console.log("Made With Love ❤️❤️❤️");
  return (
    <NewsContextProvider>
      <News />
      <a href="https://maligaurav947.github.io/Portfolio/" className="me">
        me
      </a>
    </NewsContextProvider>
  );
}
export default App;
