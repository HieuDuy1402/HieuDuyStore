"use client"; // Add this line

import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMgs = () => {
  return (
    <FacebookProvider appId="9362543673759105" chatSupport>
      <CustomChat pageId="455773877626994" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMgs;
