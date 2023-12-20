import styles from "../styles/_Filter.module.scss";
import { lazy, memo } from "react";
const DateTimePicker = lazy(() => import("./DateTimePicker"));
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
const Filter = ({ setIndexHandler }) => {
  const { control, handleSubmit, setValue } = useForm({
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
        setIndexHandler({ start: startIndex, end: endIndex });
      }
      setValue("startDate", null);
      setValue("endDate", null);
    }
  };
  return (
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
  );
};
export default memo(Filter);
