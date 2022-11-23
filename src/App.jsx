import { Routes, Route } from "react-router-dom";
import React, { useReducer, createContext } from "react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pengumuman from "./pages/Pengumuman"
import ScrollPage from "./components/ScrollPage";

/* Admin */
import AdminSignin from "./pages/admin/auth/AdminSignin"

/* Dosen */
import DosenSignin from "./pages/dosen/auth/DosenSignin"
// import AdminDash from "./pages/admin/dashboard/AdminDash"
// import AdminCreateMentor from "./pages/admin/dashboard/AdminCreateMentor"

/* Student */
import Kkn from "./pages/student/Kkn.jsx";
import Khs from "./pages/student/Khs.jsx";
import Mydash from "./pages/student/Mydash";
import Mbkm from "./pages/student/Mbkm.jsx";
import MyUkt from "./pages/student/MyUkt.jsx";
import MyRegist from "./pages/student/MyRegist";
// import Profile from "./pages/dashboard/Profile"; 

import Signin from "./pages/auth/Signin";
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
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          
          {/* Student */}
          <Route path="/dashboard/kkn" element={<Kkn />} />
          <Route path="/dashboard/khs" element={<Khs />} />
          <Route path="/dashboard/my" element={<Mydash />} />
          <Route path="/dashboard/mbkm" element={<Mbkm />} />
          <Route path="/dashboard/ukt/tagihan" element={<MyUkt />} />
          <Route path="/dashboard/ukt/bukti-registrasi" element={<MyRegist />} />
          {/* <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/questions" element={<Questions />} />
          <Route path="/question/create" element={<Question />} />
          <Route path="/question/:id" element={<Forum />} /> */}

          {/* Admin */}
          <Route path="/admin/signin" element={<AdminSignin />} />
          {/* <Route path="/admin/dashboard" element={<AdminDash />} />
          <Route path="/admin/mentor/create" element={<AdminCreateMentor />} /> */}

          {/* Dosen */}
          <Route path="/sidos" element={<DosenSignin />} />

          <Route path="/" element={<Home />} />
          <Route path="/" element={<Pengumuman />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollPage>
    </AuthContext.Provider>
  );
}