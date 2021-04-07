import { Route, Redirect } from "react-router-dom";

const PatientRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        sessionStorage.getItem("email") !== null &&
        sessionStorage.getItem("type") === "patient" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const HospitalRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        sessionStorage.getItem("email") !== null &&
        sessionStorage.getItem("type") === "hospital" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export { PatientRoute, HospitalRoute };
