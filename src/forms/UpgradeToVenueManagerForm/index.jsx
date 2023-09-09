import {
  Form,
  CheckBox,
  FormBody,
  FormContainer,
  Label,
  VenueManagerContainer,
} from "../styled";

export function UpgradeToVenueManagerForm({ onSubmit, register }) {
  return (
    <FormContainer>
      <Form
        $gap="20px"
        onSubmit={onSubmit}>
        <FormBody>
          <VenueManagerContainer>
            <Label htmlFor="venueManager">Venue Manager?</Label>
            <CheckBox
              type="checkbox"
              id="venueManager"
              {...register("venueManager")}
            />
          </VenueManagerContainer>
        </FormBody>
      </Form>
    </FormContainer>
  );
}
