import { Routes, Route } from "react-router-dom";
import React, { useReducer, createContext } from "react";

import Home from "./pages/Home";
import ScrollPage from "./components/ScrollPage";

/* Admin */
/* import AdminSignin from "./pages/admin/auth/AdminSignin"
import AdminDash from "./pages/admin/dashboard/AdminDash"
import AdminCreateMentor from "./pages/admin/dashboard/AdminCreateMentor"

/* Student */
/* import Mydash from "./pages/dashboard/Mydash";
import Profile from "./pages/dashboard/Profile";
 */
import NotFound from "./pages/NotFound";
import ResetPass from "./pages/auth/ResetPass";
import ForgotPass from "./pages/auth/ForgotPass";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  id: null,
  npm: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("npm", action.payload.npm);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload.id,
        npm: action.payload.npm,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        npm: null,
        id: null,
        token: null,
      }
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <ScrollPage>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/reset-password" element={<ResetPass />} />
          
          {/* Student */}
          {/* <Route path="/dashboard/my" element={<Mydash />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/question/:id" element={<Forum />} /> */}

          {/* Admin */}
          {/* <Route path="/admin/signin" element={<AdminSignin />} />
          <Route path="/admin/dashboard" element={<AdminDash />} />
          <Route path="/admin/mentor/create" element={<AdminCreateMentor />} /> */}

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollPage>
    </AuthContext.Provider>
  );
}