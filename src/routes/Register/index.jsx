import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { POST, REGISTER_URL } from "../../config";
import { fetchOptions } from "../../api";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../schemas";
import { RegistrationForm } from "../../forms/RegistrationForm";

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
      window.alert("User successfully createed! You can now login");
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
