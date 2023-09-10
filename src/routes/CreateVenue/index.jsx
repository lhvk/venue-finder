import { yupResolver } from "@hookform/resolvers/yup";
import { createVenueSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { VENUE_URL, POST } from "../../config";
import { fetchOptions } from "../../api";
import { VenueForm as CreateVenueForm } from "../../forms/VenueForm";
import { useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import { createVenueDefaultValues } from "../../schemas/createVenueDefaultValues";
import { Button } from "../../components/Buttons";

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
    try {
      const response = await fetch(
        VENUE_URL,
        fetchOptions(formData, POST, accessToken)
      );
      if (!response.ok)
        throw new Error(`Something went wrong: ${response.status} `);

      const newVenue = await response.json();

      resetForm();
      navigate(`/venue/${newVenue.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <h1>Create venue</h1>
        <CreateVenueForm
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
        />
      </main>
    </>
  );
}
