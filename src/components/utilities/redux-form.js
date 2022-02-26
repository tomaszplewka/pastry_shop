export const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "This field is required.";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "This field is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Provide valid email address.";
  }

  if (!values.password) {
    errors.password = "Provide password.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password.";
  }

  if (values.password !== values.confirmPassword) {
    errors.password = "Passwords do not match.";
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

export const renderField = ({
  torender,
  input,
  name,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => {
  const Component = torender;

  return (
    <>
      <Component
        type={type}
        name={name}
        required
        label={label}
        placeholder={placeholder}
        invert
        {...input}
      />
      <div className="form-input__error">
        {touched && error && <span>{error}</span>}
      </div>
    </>
  );
};
