import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-4/5 w-4/5  py-36  mx-auto my-32 lg:my-0">
        {children}
    </div>
  );
};

export default Container;
