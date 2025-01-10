import { useAuth } from "../auth/authContext";
import { GraphWorkout } from "../graphWorkout";

import { Nav } from "../nav";
import { useState } from "react";
import { PastWeek } from "../pastWeek";

export const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <Nav />
      <GraphWorkout />
      <PastWeek />
    </>
  );
};
