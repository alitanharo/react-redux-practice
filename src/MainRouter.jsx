
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router"
import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";
import Users from "./pages/Users";




const MainRouter = () => {





    return (<BrowserRouter>
        <Header />

        <Routes>

           
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/users" element={<Users/>} />
            

        </Routes>
    </BrowserRouter>);
}

export default MainRouter;