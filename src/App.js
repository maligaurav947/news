import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./dist/css/Main.css";
import Marquee from "react-fast-marquee";
function App() {
  console.log("Made With Love ❤️❤️❤️");
  return (
    <NewsContextProvider>
      <Marquee
        speed="100"
        pauseOnHover="true"
        style={{
          height: "8vh",
          fontSize: "1.6rem",
        }}
      >
        Breaking News Breaking News Breaking News Breaking News Breaking News
        Breaking News Breaking News Breaking News Breaking News Breaking News
        Breaking News Breaking News Breaking News
      </Marquee>
      <News />
    </NewsContextProvider>
  );
}
export default App;
