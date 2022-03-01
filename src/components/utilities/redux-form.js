export const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "This field is required.";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.full_name) {
    errors.full_name = "This field is required.";
  } else if (values.full_name.length > 15) {
    errors.full_name = "Must be 15 characters or less";
  }

  if (!values.phone) {
    errors.phone = "This field is required.";
  } else if (
    !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(values.phone)
  ) {
    errors.phone = "Provide valid phone number (e.g. +48999999999.";
  }

  if (!values.email) {
    errors.email = "This field is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Provide valid email address.";
  }

  if (!values.password) {
    errors.password = "Provide password.";
  }

  if (!values.password_sign_in) {
    errors.password_sign_in = "Provide password.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password.";
  }

  if (values.password !== values.confirmPassword) {
    errors.password = "Passwords do not match.";
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!values.message) {
    errors.message = "This field is required.";
  } else if (values.message.length > 100) {
    errors.message = "Max. 100 characters";
  }

  if (!values.address) {
    errors.address = "This field is required.";
  }

  if (!values.address_shipping) {
    errors.address_shipping = "This field is required.";
  }

  if (!values.zip) {
    errors.zip = "This field is required.";
  } else if (!/^\d{2}(-\d{3})$/.test(values.zip)) {
    errors.zip = "Provide valid zip code (e.g. 25-934).";
  }

  if (!values.zip_shipping) {
    errors.zip_shipping = "This field is required.";
  } else if (!/^\d{2}(-\d{3})$/.test(values.zip_shipping)) {
    errors.zip_shipping = "Provide valid zip code (e.g. 25-934).";
  }

  if (!values.city_shipping) {
    errors.city_shipping = "This field is required.";
  }

  if (!values.consent) {
    errors.consent = "This field is required.";
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
  fullwidth = false,
  invert = true,
  hide = false,
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
        invert={invert}
        fullwidth={fullwidth}
        hide={hide}
        {...input}
      />
      <div
        className={`${
          fullwidth ? "w-100 text-center" : "w-50 ms-auto"
        } form-input__error`}
      >
        {touched && error && <span className="fw-bold">{error}</span>}
      </div>
    </>
  );
};
