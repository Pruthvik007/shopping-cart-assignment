import "./App.css";
import Router from "./Router";
import BackDrop from "./components/common/BackDrop";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <div className="bg-blue-950">
      <ContextProvider>
        <BackDrop />
        <Router />
      </ContextProvider>
    </div>
  );
}

export default App;
