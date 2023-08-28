import { Icon } from "../Icon";
import { FeatureContainer, ListItem } from "./styled";

export function FeatureListItem({ hasFeature, featureName }) {
  const iconId = featureName + "-icon";
  return (
    <ListItem>
      {hasFeature ? (
        <>
          <FeatureContainer>
            <Icon id={iconId} /> {featureName}:{" "}
          </FeatureContainer>
          <Icon
            id="check-circle-icon"
            fill="var(--clr-green)"
          />
        </>
      ) : (
        <>
          <FeatureContainer>
            <Icon id={iconId} /> {featureName}:{" "}
          </FeatureContainer>
          <Icon
            id="x-circle-icon"
            fill="var(--clr-red)"
            height="24px"
            width="24px"
          />
        </>
      )}
    </ListItem>
  );
}
