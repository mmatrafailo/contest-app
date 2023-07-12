import routes from "../routes";
// import { HashRouter as Router, Route, Routes } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {

    return (
        <Router>
            <Routes>
                {routes.map(
                    (route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    )
                )}
            </Routes>
        </Router>
    );
};

export default App;