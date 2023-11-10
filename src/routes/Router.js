import React, { lazy } from "react";
import Loadable from "../layouts/loadable";
import { Navigate } from "react-router-dom";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/home/home")));

const RecetasView = Loadable(lazy(() => import("../pages/receta/receta")));

const CreateReceta = Loadable(lazy(() => import("../pages/crear/crearReceta")));

const UserProfile = Loadable(lazy(() => import("../pages/usuario/usuario")));
/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <HomePage /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      { path: "Recetas", element: <RecetasView /> },
      { path: "CrearReceta", element: <CreateReceta /> },
      { path: "Perfil", element: <UserProfile /> },
      
    ],
  },
];

export default Router;