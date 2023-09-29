import { Switch } from "@mui/material";
import { getContinents, getCountries } from "../../utils/countryCodeUtils";
import {
  ErrorMessage,
  FormContainer,
  Form,
  Input,
  Label,
  TextArea,
  MetaSection,
  NumbersContainer,
  InputContainer,
  Select,
  FormFooter,
} from "../styled";
import { Button } from "../../components/Buttons";
import { Controller } from "react-hook-form";

export function VenueForm({
  handleSubmit,
  register,
  errors,
  isDirty,
  getValues,
  control,
  isEdit,
}) {
  return (
    <FormContainer>
      <Form
        onSubmit={handleSubmit}
        id="create-venue-form">
        <div>
          <Label>Name</Label>
          <Input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>
        <div>
          <Label>Description</Label>
          <TextArea
            type="text"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Label>Media (comma-separated URLs)</Label>
          <Input
            type="text"
            {...register("media")}
          />
          {errors.media && <ErrorMessage>{errors.media.message}</ErrorMessage>}
        </div>
        <div>
          <Label>Price</Label>
          <Input
            type="number"
            {...register("price", { required: "Price is required" })}
          />
          {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
        </div>
        <NumbersContainer>
          <div>
            <Label>Max Guests</Label>
            <Input
              type="number"
              {...register("maxGuests", {
                required: "Max Guests is required",
              })}
            />
            {errors.maxGuests && (
              <ErrorMessage>{errors.maxGuests.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Label>Rating</Label>
            <Input
              type="number"
              {...register("rating")}
            />
            {errors.rating && (
              <ErrorMessage>{errors.rating.message}</ErrorMessage>
            )}
          </div>
        </NumbersContainer>
        <MetaSection>
          <div>
            <Label>Wifi</Label>
            <Controller
              control={control}
              name="meta.wifi"
              render={() => (
                <Switch
                  {...register("meta.wifi")}
                  checked={isEdit && getValues("meta.wifi")}
                />
              )}
            />
          </div>
          <div>
            <Label>Parking</Label>
            <Controller
              control={control}
              name="meta.parking"
              render={() => (
                <Switch
                  {...register("meta.parking")}
                  checked={isEdit && getValues("meta.parking")}
                />
              )}
            />
          </div>
          <div>
            <Label>Breakfast</Label>
            <Controller
              control={control}
              name="meta.breakfast"
              render={() => (
                <Switch
                  {...register("meta.breakfast")}
                  checked={isEdit && getValues("meta.breakfast")}
                />
              )}
            />
          </div>
          <div>
            <Label>Pets</Label>
            <Controller
              control={control}
              name="meta.pets"
              render={() => (
                <Switch
                  {...register("meta.pets")}
                  checked={isEdit && getValues("meta.pets")}
                />
              )}
            />
          </div>
        </MetaSection>
        <div>
          <Label>Address</Label>
          <Input
            type="text"
            {...register("location.address")}
          />
          {errors.address && (
            <ErrorMessage>{errors.address.message}</ErrorMessage>
          )}
        </div>
        <InputContainer>
          <div>
            <Label>City</Label>
            <Input
              type="text"
              {...register("location.city")}
            />
            {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
          </div>
          <div>
            <Label>Zip</Label>
            <Input
              type="text"
              {...register("location.zip")}
            />
          </div>
        </InputContainer>

        <div>
          <Label>Country</Label>
          <Select
            type="text"
            {...register("location.country")}>
            {getCountries()}
          </Select>
        </div>
        <div>
          <Label>Continent</Label>
          <Select
            type="text"
            {...register("location.continent")}>
            {getContinents()}
          </Select>
        </div>

        <NumbersContainer>
          <div>
            <Label>Latitude</Label>
            <Input
              type="number"
              {...register("location.lat")}
            />
            {errors.lat && <ErrorMessage>{errors.lat.message}</ErrorMessage>}
          </div>
          <div>
            <Label>Longitude</Label>
            <Input
              type="number"
              {...register("location.lng")}
            />
            {errors.lng && <ErrorMessage>{errors.lng.message}</ErrorMessage>}
          </div>
        </NumbersContainer>
        <FormFooter>
          <Button
            disabled={isDirty}
            $maxWidth="100%"
            type="submit">
            Submit
          </Button>
        </FormFooter>
      </Form>
    </FormContainer>
  );
}
