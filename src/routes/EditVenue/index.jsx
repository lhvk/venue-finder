import { Navigate, useNavigate, useParams } from "react-router-dom";
import { VenueForm as EditVenueForm } from "../../forms/VenueForm";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import { createVenueSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/Loader";
import { VENUE_URL } from "../../config";
import { useEffect } from "react";
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";
import { handleEditVenue } from "../../handlers/handleEditVenue";

export default function EditVenue() {
  const navigate = useNavigate();
  const user = getLocalStorageItem("user");
  const { accessToken, venueManager } = user || {};
  const { id } = useParams();
  const { data: venue, isLoading, isError } = useFetch(`${VENUE_URL}/${id}`);

  let schema = createVenueSchema;

  const {
    register,
    handleSubmit,
    setValue,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  useEffect(() => {
    if (!isLoading && !isError && venue) {
      Object.keys(venue).forEach((key) => {
        setValue(key, venue[key]);
      });
    }
  }, [isLoading, isError, venue, setValue]);

  if (!user || !venueManager) return <Navigate to="/forbidden" />;

  if (isLoading) {
    return <Loader message={"venue"} />;
  }

  if (isError) return <p>an error occured..</p>;

  const onSubmit = (formData) => {
    handleEditVenue(formData, id, resetForm, navigate, accessToken);
  };

  return (
    <Main>
      <PageHeader pageTitle="Edit venue" />
      <EditVenueForm
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
      />
    </Main>
  );
}
