import { useNavigate } from "react-router-dom";
import { Button } from "..";

export function BackButton() {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(-1)}>&larr; Back</Button>;
}
