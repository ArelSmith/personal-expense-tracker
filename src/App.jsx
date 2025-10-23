import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavigationBar brand="ExpenseTracker" />
      <Home />
    </>
  );
}

export default App;
