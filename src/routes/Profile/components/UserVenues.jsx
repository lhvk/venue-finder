import React from "react";
import { VenueManager } from "./VenueManager";
import { Customer } from "./Customer";

export function UserVenues({
  userData,
  setUserData,
  isVenueManager,
  setIsSubmitting,
  isSubmitting,
  isLoading,
}) {
  return (
    <div>
      {isVenueManager && (
        <VenueManager
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
          setUserData={setUserData}
          userData={userData}
          isLoading={isLoading}
        />
      )}

      {!isVenueManager && (
        <Customer
          userData={userData}
          isVenueManager={isVenueManager}
          isSubmitting={isSubmitting}
          setUserData={setUserData}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
