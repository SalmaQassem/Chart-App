import styles from "../styles/_DatePicker.module.scss";
import { memo } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const DateTimePicker = ({ value, placeholder, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className={styles.datePicker}
        value={value === null ? null : dayjs(value)}
        onChange={onChange}
        slotProps={{
          textField: { placeholder: placeholder },
        }}
      />
    </LocalizationProvider>
  );
};
export default memo(DateTimePicker);
