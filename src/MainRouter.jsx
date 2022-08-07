
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router"
import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";
import Users from "./pages/Users";
import Todo from "./pages/Todo";




const MainRouter = () => {





    return (<BrowserRouter>
        <Header />

        <Routes>

           
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/users" element={<Users/>} />
            <Route path="/todo" element={<Todo />} />
            

        </Routes>
    </BrowserRouter>);
}

export default MainRouter;