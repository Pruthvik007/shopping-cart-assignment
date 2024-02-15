import "./App.css";
import Router from "./Router";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <div className="bg-blue-950">
      <ContextProvider>
        <Router />
      </ContextProvider>
    </div>
  );
}

export default App;
