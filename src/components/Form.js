import React, { createContext, useState } from "react";
import EducationalBgList from "./EducationalBgList";
import Input from "./Input";

const initialValues = {
  firstName: "",
  lastName: "",
  age: 0,
  educationalBackground: [],
};

export const FormContext = createContext({
  formValue: initialValues,
  disabledAdding: false,
});

function Form() {
  const [form, setForm] = useState(initialValues);
  const onChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  return (
    <FormContext.Provider
      value={{
        formValue: form,
        disabledAdding: false,
      }}
    >
      <form>
        <Input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={onChange}
        />
        <Input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={onChange}
        />
        <Input type="number" name="age" value={form.age} onChange={onChange} />
        <EducationalBgList />
      </form>
    </FormContext.Provider>
  );
}

export default Form;
