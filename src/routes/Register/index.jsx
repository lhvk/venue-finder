import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { POST, REGISTER_URL } from "../../config";
import { fetchOptions } from "../../api";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../schemas";
import { RegistrationForm } from "../../forms/RegistrationForm";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      if (isSubmitting) return;

      setIsSubmitting(true);

      const response = await fetch(REGISTER_URL, fetchOptions(formData, POST));
      const data = await response.json();

      if (!response.ok) throw new Error(data.errors[0].message);

      resetForm();
      toast.success("User successfully created! You can now login", {
        position: "bottom-right",
      });
      navigate("/login");
    } catch (error) {
      toast.error(`${error}`, { position: "bottom-right" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <RegistrationForm
        handleSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </main>
  );
}
