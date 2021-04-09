import React from "react";

// Componentes
import Header from "../../components/header";
import Footer from "../../components/footer";
import Historic from "./historic";
import Calc from "./calcs";

const Calculation = () => {
  return (
    <>
      <Header />
      <Calc />
      <Historic />
      <Footer />
    </>
  );
};
export default Calculation;
