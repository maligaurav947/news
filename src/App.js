import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./dist/css/Main.css";
function App() {
  console.log("Made With Love");
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}
export default App;
