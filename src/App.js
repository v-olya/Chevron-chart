import { useState } from "react";
import { CheckboxList } from "./components/CheckboxList.js";
import { Chart } from "./components/Chart.js";
import { ErrorBoundary } from "./components/ErrorBoundary.js";

export function App() {
  const [selections, setSelections] = useState([true]);

  return (
    <main className="container flex flex-col">
      <h1 className="txt-c">
        A bunch of checkboxes with at least one selected
      </h1>
      <ErrorBoundary
        fallback={<h2 className="txt-c red">Oh no, nothing works at all...</h2>}
      >
        <CheckboxList selections={selections} setSelections={setSelections} />
        <ErrorBoundary
          fallback={
            <h3 className="txt-c"> <br/>
              <b className="red">We are sorry</b>,&nbsp; but the chevron chart
              broke.
            </h3>
          }
        >
          <Chart selections={selections}/>
        </ErrorBoundary>
      </ErrorBoundary>
    </main>
  );
}
