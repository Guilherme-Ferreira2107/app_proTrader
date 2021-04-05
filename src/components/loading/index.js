import React from "react";
import { RotateSpinner } from "react-spinners-kit";

import { LoadingWrapper } from "./styles.js";

const Loading = ({ children, loading }) => {
  return (
    <LoadingWrapper>
      {loading ? <RotateSpinner size={35} color="#231225" /> : <>{children}</>}
    </LoadingWrapper>
  );
};

export default Loading;
