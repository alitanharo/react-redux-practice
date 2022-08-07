import { NavLink } from "react-router-dom";

const Header = () => {
    return (  <header> 

<NavLink to = "/post">Post</NavLink>
     <div> 
            <NavLink to="/users">Users</NavLink>
     </div>
     <div>
            <NavLink to="/todo">Todos</NavLink>
     </div>


    </header>);
}
 
export default Header;