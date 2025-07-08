import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import App from "./pages/App.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const wrapper = document.getElementById("app");

if (!wrapper) {
  throw new Error("Wrapper div not found");
}

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="*404" component={PageNotFound} />
    </Router>
  ),
  wrapper,
);
