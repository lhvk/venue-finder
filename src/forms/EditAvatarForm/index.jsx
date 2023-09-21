import { ErrorMessage, Form, FormBody, Input, Label } from "../styled";

export function EditAvatarForm({ onSubmit, register, errors }) {
  return (
    <>
      <Form
        id="edit-avatar-form"
        $gap="20px"
        onSubmit={onSubmit}>
        <FormBody>
          <Label htmlFor="avatar">Avatar URL</Label>
          <Input
            type="url"
            id="avatar"
            {...register("avatar")}
          />
          {errors.avatar && (
            <ErrorMessage>{errors.avatar.message}</ErrorMessage>
          )}
        </FormBody>
      </Form>
    </>
  );
}
