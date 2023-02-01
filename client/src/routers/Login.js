import Navigation from "../components/Navigation";
import LoginForm from "../components/LoginForm";

const User = {
  id : 'abcd',
  pw: '1234'
}

const Login = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
