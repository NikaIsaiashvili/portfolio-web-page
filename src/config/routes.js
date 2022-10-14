import AboutPg from "../Pages/About_PG/AboutPage"
import ExperiencePg from "../Pages/Experience_PG/ExperiencePage";
import ProjectsPg from "../Pages/Projects_PG/ProjectsPage";
import HomePg from "../Pages/Home_PG/HomePage";

const ROUTES = {
    ABOUT: "about",
    EXPERIENCE: "experience",
    PROJECTS: "projects",
    HOME: "/",
  };
  
  const ROUTES_CONFIG = [
    {
      path: ROUTES.ABOUT,
      page: AboutPg,
    },
    {
      path: ROUTES.EXPERIENCE,
      page: ExperiencePg,
    },
    {
      path: ROUTES.PROJECTS,
      page: ProjectsPg,
    },
    {
      path: ROUTES.HOME,
      page: HomePg,
    }
  ];
  
  export default ROUTES;
  export { ROUTES_CONFIG };