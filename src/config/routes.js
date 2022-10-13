import About from "../components/About/About"
import Experience from "../components/Experience/Experience"
import Projects from "../components/Projects/Projects";
import Body from "../components/Body/Body"

const ROUTES = {
    ABOUT: "about",
    EXPERIENCE: "experience",
    PROJECTS: "projects",
    BODY: "/",
  };
  
  const ROUTES_CONFIG = [
    {
      path: ROUTES.ABOUT,
      page: About,
    },
    {
      path: ROUTES.EXPERIENCE,
      page: Experience,
    },
    {
      path: ROUTES.PROJECTS,
      page: Projects,
    },
    {
      path: ROUTES.BODY,
      page: Body,
    }
  ];
  
  export default ROUTES;
  export { ROUTES_CONFIG };