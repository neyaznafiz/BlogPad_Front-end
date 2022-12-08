import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  Aos.init({ duration: 1200, mirror: false });
  return (
    <div className="">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
