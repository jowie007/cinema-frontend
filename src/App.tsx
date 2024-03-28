import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { BasicButton } from "./components/basic/basic-button";
import { BasicInput } from "./components/basic/basic-input";
import { PageLayout } from "./components/layout/page-layout";
import { useScreeningControllerServiceFindAll } from "./openapi/queries";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  const { data: screenings } = useScreeningControllerServiceFindAll({
    // Today as YYYY-MM-DD
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    console.log("screenings", screenings);
  }, [screenings]);

  return (
    <PageLayout>
      <BasicButton title="Hello world" />
      <BasicInput title="Hello world" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </PageLayout>
  );
}

export default App;
