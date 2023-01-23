import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { Container } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <Container>
      <DatePicker
        className="datePicker"
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy "
        placeholderText="01/10/2023"
      />
    </Container>
  );
};
