import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./ReduxFile";

function App() {
  Aos.init({ duration: 1200, mirror: false });
  return (
    <div className="bg-secondary">
      <Provider store={store}>
        <RouterProvider router={routes} />
        </Provider>
    </div>
  );
}

export default App;
