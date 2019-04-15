import LoginPage from "../views/pages/Login/LoginContainer.jsx";
import TeamPage from "../views/pages/Team/TeamContainer.jsx";
import AboutUsPage from "../views/pages/AboutUsPage";
import DiscoverPage from "../views/pages/Discover/DiscoverContainer.jsx";
import ProjectPageContainer from "../views/pages/ProjectPage/ProjectPageContainer.jsx";
import RegisterPage from "../views/pages/Register/RegisterContainer.jsx";
import DashboardPage from "../views/pages/Dashboard/DashboardContainer.jsx";

var indexRoutes = [
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/team", name: "TeamPage", component: TeamPage },
  { path: "/about", name: "About", component: AboutUsPage },
  { path: "/discover", name: "DiscoverPage", component: DiscoverPage },
  { path: "/dashboard", name: "DashboardPage", component: DashboardPage },
  { path: "/project/:projectID", name: "ProjectPageContainer", component: ProjectPageContainer}
];

export default indexRoutes;
