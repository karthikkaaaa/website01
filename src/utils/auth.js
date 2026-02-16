export const isLoggedIn = () => {
    return localStorage.getItem("loggedInUser") !== null;
  };
  
  export const loginUser = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("loggedInUser");
  };
  