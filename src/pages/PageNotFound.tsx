import { A } from "@solidjs/router";
import type { Component } from "solid-js";

const PageNotFound: Component = () => {
  return (
    <div>
      <h1 style="justify-content: center; text-align: center;">
        Error 404 - Page Not Found
      </h1>
      <h2 style="justify-content: center; text-align: center;">
        <A href="/">Go Home</A>
      </h2>
    </div>
  );
};

export default PageNotFound;
