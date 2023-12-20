import styles from "./styles/_App.module.scss";
import { lazy, useState } from "react";
const Chart = lazy(() => import("./components/Chart"));
const Filter = lazy(() => import("./components/Filter"));
function App() {
  const [dateIndex, setdateIndex] = useState({ start: 0, end: 11 });
  return (
    <div className={styles.chartItem}>
      <Filter setIndexHandler={setdateIndex} />
      <div className={styles.chart}>
        <Chart filterIndex={dateIndex} />
      </div>
    </div>
  );
}
export default App;
