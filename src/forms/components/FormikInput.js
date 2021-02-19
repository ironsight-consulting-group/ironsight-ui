import React from "react"
import { FormField, TextInput } from "grommet"
import { Field } from "formik"

const valueIsEmpty = value => value === ""

const FormikInput = ({ name, label }) => {
  return (
    <Field name={name}>
      {({ form, field, meta }) => (
        <FormField error={meta.error}>
          <TextInput
            placeholder={label}
            name={name}
            value={meta.value}
            onBlur={() => {
              if (valueIsEmpty(meta.value)) {
                form.setFieldError(name, undefined)
              }
            }}
            onChange={e => {
              field.onChange(e)
              if (!valueIsEmpty(meta.value)) {
                form.validateField(name)
              }
            }}
          />
        </FormField>
      )}
    </Field>
  )
}

export default FormikInput
