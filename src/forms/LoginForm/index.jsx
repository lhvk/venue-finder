import { Button } from "../../components/Buttons";
import {
  ErrorMessage,
  FormContainer,
  Form,
  Input,
  Label,
  FormFooter,
  RegisterLink,
} from "../styled";

export function LoginForm({ handleSubmit, register, errors }) {
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email")}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>
        <FormFooter>
          <Button type="submit">Login</Button>
          <span>
            Not a user?{" "}
            <RegisterLink to="/register">Register here</RegisterLink>
          </span>
        </FormFooter>
      </Form>
    </FormContainer>
  );
}
