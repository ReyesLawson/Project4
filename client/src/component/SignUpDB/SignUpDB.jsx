export function SignUpDB(values) {
  let error = {};
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  console.log ("Email pattern:", emailPattern);  

  if (values.name === "") {
    error.name = "Please enter Name";
  }

  if (values.email === "") {
    error.email = "Please enter email";
  } else if (!emailPattern.test(values.email)) {
    error.email = "Try another email";
  
  }

  if (values.password === "") {
    error.password = "Please enter Password";
  } else if (!passwordPattern.test(values.password)) {
    error.password = "Password did not match criteria";
  }
  return error;
}

