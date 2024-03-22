export const validateLoginForm = (name, email, password, isSignIn) => {
  const test_name = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const test_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const test_password =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!test_name && !isSignIn) {
    return "Name not valid";
  }

  if (!test_email) {
    return "Email not valid";
  }

  if (!test_password) {
    return "Password not valid";
  }

  return null;
};
