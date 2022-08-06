

export default (state=[], {type,payload})=>{

switch(type){

case "ADD_USERS": return payload

default:return state;


}


}

