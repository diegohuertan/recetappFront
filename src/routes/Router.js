import React, { lazy } from "react";
import Loadable from "../layouts/loadable";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/home/home")));

const RecetasView = Loadable(lazy(() => import("../pages/receta/receta")));

const RecetaIformacion = Loadable(lazy(() => import("../pages/receta/RecetaInfo")));

const CreateReceta = Loadable(lazy(() => import("../pages/crear/crearReceta")));

const UserProfile = Loadable(lazy(() => import("../pages/usuario/usuario")));

const LoginUser = Loadable(lazy(() => import("../pages/login/login")));

const Registro = Loadable(lazy(()=> import("../pages/registro/registro")));

/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", exact: true, element: <HomePage /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      { path: "Recetas", element: <RecetasView /> },
      { path: "agregar", element: <PrivateRoute><CreateReceta /> </PrivateRoute>},
      { path: "Perfil", element: <PrivateRoute><UserProfile /></PrivateRoute> },
      { path: "RecetaInfo/:id", element: <RecetaIformacion /> },
      { path: "Login", element: <LoginUser /> },
      { path: "Registro", element: <Registro /> }
      
    ],
  },
];

export default Router;