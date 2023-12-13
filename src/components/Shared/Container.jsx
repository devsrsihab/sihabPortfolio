import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-4/5 w-4/5 md:py-20 lg:py-36  mx-auto my-8 md:my-12 lg:my-0">
        {children}
    </div>
  );
};

export default Container;
