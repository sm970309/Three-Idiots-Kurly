import Navigation from "../components/Navigation";
import LoginForm from "../components/LoginForm";

const User = {
  id: "abcd",
  pw: "1234",
};

const Login = () => {
  return (
    <div>
      <Navigation />
      <LoginForm />
    </div>
  );
};

export default Login;
