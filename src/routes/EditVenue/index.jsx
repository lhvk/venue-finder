import { useNavigate, useParams } from "react-router-dom";
import { VenueForm as EditVenueForm } from "../../forms/VenueForm";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import { createVenueSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/Loader";
import { PUT, VENUE_URL } from "../../config";
import { fetchOptions } from "../../api";
import { useEffect } from "react";
import { Button } from "../../components/Buttons";

export default function EditVenue() {
  const navigate = useNavigate();
  const { accessToken } = getLocalStorageItem("user");
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

  if (isLoading) {
    return <Loader message={"venue"} />;
  }

  if (isError) return <p>an error occured..</p>;

  const onSubmit = async (formData) => {
    try {
      const response = await fetch(
        `${VENUE_URL}/${id}`,
        fetchOptions(formData, PUT, accessToken)
      );
      if (!response.ok)
        throw new Error(`Something went wrong: ${response.status} `);

      const updatedVenue = await response.json();
      console.log("data", updatedVenue);

      resetForm();
      navigate(`/venue/${updatedVenue.id}`);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <h1>Edit Venue</h1>
        <EditVenueForm
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
        />
      </main>
    </>
  );
}
