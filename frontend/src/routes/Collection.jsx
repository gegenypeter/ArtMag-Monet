import React, { useState } from "react";
import Footer from "../component/Footer";
import axios from "axios";
import demo from "./test";

const Collection = async () => {

  return (
    <>
      <h1>Your collection</h1>
      {demo}
      <Footer />
    </>
  );
};

export default Collection;
