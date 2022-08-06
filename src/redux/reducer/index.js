import { combineReducers } from "redux";
import posts from "./posts";
import users from "./users";

   const reducer = combineReducers(
   {   users:users,
posts:posts}
   )


   export default reducer;