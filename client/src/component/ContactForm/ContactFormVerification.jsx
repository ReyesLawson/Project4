export const contactVerification = (values) => {
  const errors = {};
  
  if (!values.name) errors.name = "Name is required.";
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is not valid.";
  }
  if (!values.message) errors.message = "Message is required.";
  
  return errors;
};
