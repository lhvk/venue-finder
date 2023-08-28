import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import { POST, REGISTER_URL } from "../../config";
import { fetchOptions } from "../../api";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../schemas";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await fetch(REGISTER_URL, fetchOptions(formData, POST));

      if (!response.ok)
        throw new Error(`Something went wrong: ${response.status} `);
      resetForm();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <RegistrationForm
        handleSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
    </main>
  );
}
