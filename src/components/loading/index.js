import React from "react";
import { RotateSpinner } from "react-spinners-kit";

import { LoadingWrapper } from "./styles.js";
import { Cor } from "../../assets/cores.js";

const Loading = ({ children, loading, color }) => {
  return (
    <LoadingWrapper>
      {loading ? (
        <RotateSpinner size={35} color={color ? color : Cor.Purple} />
      ) : (
        <>{children}</>
      )}
    </LoadingWrapper>
  );
};

export default Loading;
