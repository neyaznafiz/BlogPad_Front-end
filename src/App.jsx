import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./ReduxFile";
import Lottie from "lottie-react";
import welcome from "@/Assets/welcome.json";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  Aos.init({ duration: 1200, mirror: false });
  return (
    <div className="bg-secondary">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Lottie animationData={welcome} className="w-[1000px]" />
        </div>
      ) : (
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      )}
    </div>
  );
}

export default App;
