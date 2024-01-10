import { Routes as RoutesDOM, Route } from "react-router-dom";

import Home from "../pages/Home";

const Routes = () => {
  return (
    <RoutesDOM>
      {/* <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<PageNotFound />} /> */}
      <Route path="/" element={<Home />}/>
    </RoutesDOM>
  );
};

export default Routes;
