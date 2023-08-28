import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas";
import { LOGIN_URL, POST } from "../../config";
import { fetchOptions } from "../../api";
import { setLocalStorageItem } from "../../utils/localStorageUtils";
import LoginForm from "../../components/Forms/LoginForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      const response = await fetch(LOGIN_URL, fetchOptions(data, POST));
      const userData = await response.json();
      if (!response.ok)
        throw new Error(`Something went wrong ${response.status}`);

      navigate("/profile");
      return setLocalStorageItem("user", userData);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <LoginForm
        handleSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
    </main>
  );
}
