import { Switch } from "@mui/material";
import { Button } from "../../components/Buttons";
import {
  ErrorMessage,
  Form,
  FormBody,
  FormContainer,
  FormFooter,
  Input,
  Label,
  RegisterLink,
  VenueManagerContainer,
} from "../styled";

export function RegistrationForm({ handleSubmit, register, errors }) {
  return (
    <FormContainer>
      <Form
        $width="300px;"
        $gap="20px"
        onSubmit={handleSubmit}>
        <FormBody>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              {...register("name")}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              {...register("password")}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Label htmlFor="avatar">Avatar URL</Label>
            <Input
              type="url"
              id="avatar"
              {...register("avatar")}
            />
            {errors.avatar && (
              <ErrorMessage>{errors.avatar.message}</ErrorMessage>
            )}
          </div>
          <VenueManagerContainer>
            <Label htmlFor="venueManager">Venue Manager?</Label>
            <Switch
              id="venueManager"
              {...register("venueManager")}
            />
          </VenueManagerContainer>
        </FormBody>
        <FormFooter>
          <Button type="submit">Submit</Button>
          <span>
            Already a user? <RegisterLink to="/login">Login here</RegisterLink>
          </span>
        </FormFooter>
      </Form>
    </FormContainer>
  );
}
