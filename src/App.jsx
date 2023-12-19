import styles from "./styles/_App.module.scss";
import { lazy, useState } from "react";
const Chart = lazy(() => import("./components/Chart"));
import DateTimePicker from "./components/DateTimePicker";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";

function App() {
  const [dateIndex, setdateIndex] = useState({ start: 0, end: 11 });
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      startDate: null,
      endDate: null,
    },
  });
  const dateInputs = [
    {
      id: 0,
      name: "startDate",
      type: "date",
      placeholder: "from",
    },
    {
      id: 1,
      name: "endDate",
      type: "date",
      placeholder: "to",
    },
  ];
  const submitFilter = (formData) => {
    if (formData.startDate && formData.endDate) {
      const startIndex = new Date(dayjs(formData.startDate)).getMonth();
      const endIndex = new Date(dayjs(formData.endDate)).getMonth();
      if (startIndex < endIndex) {
        setdateIndex({ start: startIndex, end: endIndex });
      }
      setValue("startDate", null);
      setValue("endDate", null);
    }
  };
  return (
    <div className={styles.chartItem}>
      <form className={styles.filterForm} onSubmit={handleSubmit(submitFilter)}>
        <div className={styles.inputs}>
          {dateInputs.map((item) => {
            return (
              <div key={item.id} className={styles.input}>
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DateTimePicker
                      placeholder={item.placeholder}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            );
          })}
        </div>
        <button className={styles.filterBtn} type="submit">
          <span>filter</span>
        </button>
      </form>

      <div className={styles.chart}>
        <Chart filterIndex={dateIndex} />
      </div>
    </div>
  );
}

export default App;
