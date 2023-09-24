import { FeatureListItem } from "../../../components/FeatureListItem";
import { List } from "../styled";

export function MetaFeatures({ venue }) {
  if (venue.meta) {
    const { meta } = venue;
    const metaFeaturesArray = Object.keys(meta).map((featureKey) => ({
      featureName: featureKey,
      hasFeature: meta[featureKey],
    }));

    return (
      <List>
        <h3>Included</h3>
        {metaFeaturesArray.map((feature) => (
          <FeatureListItem
            key={feature.featureName}
            featureName={feature.featureName}
            hasFeature={feature.hasFeature}
          />
        ))}
      </List>
    );
  }
}
