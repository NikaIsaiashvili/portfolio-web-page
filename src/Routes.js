import { Routes as RoutesList, Route } from "react-router-dom";
import { ROUTES_CONFIG } from "./config/routes";
import NotFound from "./Pages/NOT_FOUND/NotFound";

function RoutesPath() {
  return (
    <RoutesList>
      {ROUTES_CONFIG.map((route) => {
      const Page = route.page;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={  
                <Page />
            }
          />
        );
      })}
      <Route path="*" element= {<NotFound />} />
    </RoutesList>
  );
}

export default RoutesPath;
