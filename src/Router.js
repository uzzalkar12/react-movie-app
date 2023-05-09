import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App.js";
import Movie from "../src/components/movies/movie/Movie.js";
import Main from "./layout/Main.js";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/movie/:id" element={<Movie />}></Route>
                <Route path="/dashboard" element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;

