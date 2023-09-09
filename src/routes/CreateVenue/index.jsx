import { yupResolver } from "@hookform/resolvers/yup";
import { createVenueSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { VENUE_URL, POST } from "../../config";
import { fetchOptions } from "../../api";
import { CreateVenueForm } from "../../forms/CreateVenueForm";
import { useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import { CreateVenueMain } from "./styled";
import { createVenueDefaultValues } from "../../schemas/createVenueDefaultValues";

export default function CreateVenue() {
  const navigate = useNavigate();
  const { accessToken } = getLocalStorageItem("user");

  let schema = createVenueSchema;

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: createVenueDefaultValues,
  });

  const onSubmit = async (formData) => {
    console.log("formData", formData);
    try {
      const response = await fetch(
        VENUE_URL,
        fetchOptions(formData, POST, accessToken)
      );
      if (!response.ok)
        throw new Error(`Something went wrong: ${response.status} `);

      const data = await response.json();
      console.log(data);

      resetForm();
      navigate("/venue/:id");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CreateVenueMain>
      <h1>Create venue</h1>
      <CreateVenueForm
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
      />
    </CreateVenueMain>
  );
}
