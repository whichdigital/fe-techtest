import * as Preact from "preact";
import { h } from "preact";

export const App = () => <div>Hello World</div>;

export const renderApp = () => {
  Preact.render(<App />, document.getElementById("app-root") as Element);
};
