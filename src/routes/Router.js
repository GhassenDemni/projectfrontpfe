import { lazy } from "react";
import { Navigate } from "react-router-dom";

import ListOfDepartement from "../views/dashboards/ListOfDepartement.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch"));
// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts"));
const ListOfUsers = lazy(() => import("../views/dashboards/ListOfUsers"));

const ListOfPresence = lazy(() =>
  import("../views/dashboards/ListOfPresence.js")
);
const ListeOfSallon = lazy(() =>
  import("../views/dashboards/ListeOfSallon.js")
);
const AddUser = lazy(() => import("../views/dashboards/AddUser.js"));
const AddDepartement = lazy(() =>
  import("../views/dashboards/AddDepartement.js")
);
const AddSallon = lazy(() => import("../views/dashboards/AddSallon.js"));
const ViewUsers = lazy(() => import("../views/dashboards/ViewUsers.js"));
/*****Routes******/
const ViewSallon = lazy(() => import("../views/dashboards/ViewSallon.js"));
const ViewPresence = lazy(() => import("../views/dashboards/ViewPresence.js"));
const Viewdepartement = lazy(() =>
  import("../views/dashboards/Viewdepartement.js")
);

const UpdateDepartement = lazy(() =>
  import("../views/dashboards/UpdateDepartement.js")
);
const UpdateUser = lazy(() => import("../views/dashboards/UpdateUser.js"));

const UpdateSallon = lazy(() => import("../views/dashboards/UpdateSallon.js"));

const Login = lazy(() => import("../views/dashboards/Login.js"));
const D1 = lazy(() => import("../views/dashboards/D1.js"));
const ThemeRoutes = [
  {
    path: "dashboards/dashboard1",
    element: <FullLayout />,
    children: [
      // { path: "/", element: <FullLayout /> },
      // { path: "/", element: <Navigate to="dashboards/dashboard1" /> },
      // { path: "dashboards/dashboard1", exact: true, element: <Dashboard1 /> },
      // { path: "tables/basic-table", element: <BasicTable /> },
      // { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      // { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      // { path: "/form-elements/button", element: <ExButton /> },
      // { path: "/form-elements/checkbox", element: <ExCheckbox /> },
      // { path: "/form-elements/radio", element: <ExRadio /> },
      // { path: "/form-elements/slider", element: <ExSlider /> },
      // { path: "/form-elements/switch", element: <ExSwitch /> },
      { path: "/dashboards/dashboard1/D1", element: <D1 /> },
      { path: "/dashboards/dashboard1/ListOfUsers", element: <ListOfUsers /> },
      {
        path: "/dashboards/dashboard1/ListOfDepartement",
        element: <ListOfDepartement />,
      },

      {
        path: "/dashboards/dashboard1/ListeOfSallon",
        element: <ListeOfSallon />,
      },
      { path: "/dashboards/dashboard1/ViewUsers/:id", element: <ViewUsers /> },
      {
        path: "/dashboards/dashboard1/ViewSallon/:id",
        element: <ViewSallon />,
      },

      {
        path: "/dashboards/dashboard1/Viewdepartement/:id",
        element: <Viewdepartement />,
      },
      { path: "/dashboards/dashboard1/AddUser", element: <AddUser /> },
      {
        path: "/dashboards/dashboard1/AddDepartement",
        element: <AddDepartement />,
      },
      { path: "/dashboards/dashboard1/AddSallon", element: <AddSallon /> },
      {
        path: "/dashboards/dashboard1/UpdateDepartement/:id",
        element: <UpdateDepartement />,
      },
      {
        path: "/dashboards/dashboard1/UpdateUser/:id",
        element: <UpdateUser />,
      },
      {
        path: "/dashboards/dashboard1/UpdateSallon/:id",
        element: <UpdateSallon />,
      },
      ,
    ],
  },

  { path: "/", element: <Login /> },
];

export default ThemeRoutes;
