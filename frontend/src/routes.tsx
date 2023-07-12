import Contest from "./components/Contest";
import Contests from "./pages/Contests";
import Home from "./pages/Home";

const routes = [
    { path: "/", element: <Home /> }, //Home page
    { path: "/contests", element: <Contests /> }, //Contests list page
    { path: "/contest/:contestId", element: <Contest /> }, //Contest page
]

export default routes