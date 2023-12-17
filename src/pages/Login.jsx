import AuthForm from "../components/AuthForm";
import { useAuth } from "../utils/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const onSubmit = async (values) => {
    await login(values.email, values.password);
  };

  return (
    <div>
      <AuthForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
