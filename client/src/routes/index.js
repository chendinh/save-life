import LoginPage from "../views/pages/Login/LoginContainer.jsx";
import Login1 from "../views/pages/Login1/Login1Container.jsx";
import TeamPage from "../views/pages/Team/TeamContainer.jsx";
import AboutUsPage from "../views/pages/AboutUsPage";
import DiscoverPage from "../views/pages/Discover/DiscoverContainer.jsx";

var indexRoutes = [
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/login1", name: "LoginPage1", component: Login1 },
  { path: "/team", name: "TeamPage", component: TeamPage },
  { path: "/about", name: "About", component: AboutUsPage },
  { path: "/discover", name: "DiscoverPage", component: DiscoverPage },
];

export default indexRoutes;
