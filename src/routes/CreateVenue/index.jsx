import { yupResolver } from "@hookform/resolvers/yup";
import { createVenueSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { VENUE_URL, POST } from "../../config";
import { fetchOptions } from "../../api";
import { VenueForm as CreateVenueForm } from "../../forms/VenueForm";
import { Navigate, useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import { createVenueDefaultValues } from "../../schemas/createVenueDefaultValues";
import { PageHeader } from "../../components/PageHeader";
import { Main } from "../../components/Main";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

export default function CreateVenue() {
  const navigate = useNavigate();
  const user = getLocalStorageItem("user");
  const { accessToken, venueManager } = user || {};

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

  if (!user || !venueManager) return <Navigate to="/forbidden" />;

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
    } catch (error) {
      toast.error(error, { position: "bottom-right" });
    }
  };

  return (
    <Main>
      <Helmet title="venueFinder - Create Venue" />
      <PageHeader pageTitle="Create venue" />
      <CreateVenueForm
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
      />
    </Main>
  );
}
