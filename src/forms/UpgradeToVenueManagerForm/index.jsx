import { Switch } from "@mui/material";
import {
  Form,
  FormBody,
  FormContainer,
  Label,
  VenueManagerContainer,
} from "../styled";

export function UpgradeToVenueManagerForm({ onSubmit, register }) {
  return (
    <FormContainer>
      <Form
        id="upgrade-to-manager-form"
        $gap="20px"
        onSubmit={onSubmit}>
        <FormBody>
          <VenueManagerContainer>
            <Label htmlFor="venueManager">Venue Manager?</Label>
            <Switch
              id="venueManager"
              {...register("venueManager")}
            />
          </VenueManagerContainer>
        </FormBody>
      </Form>
    </FormContainer>
  );
}
