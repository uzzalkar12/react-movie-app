import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "src/App.js";
import Movie from "src/components/movies/movie/Movie.js";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/movie/:id" element={<Movie />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;

