import { Box, Link, Typography } from "@mui/material";
import React from "react";
import SignUp from "./signup";
import Login from "./login";

function HomePageComponent() {
  const [component, setComponent] = React.useState<string>("signup");

  const boxStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    mt: "1rem",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  };

  return (
    <Box>
      {component === "signup" ? <SignUp /> : <Login />}

      <Box
        sx={{
          ...boxStyle,
          display: `${component === "signup" ? "flex" : "none"}`,
        }}
      >
        <Typography sx={{ color: "black", fontSize: "1rem" }}>
          Already have an account?{" "}
        </Typography>

        <Link
          component="button"
          variant="body2"
          onClick={() => {
            setComponent("login");
          }}
        >
          Login
        </Link>
      </Box>

      <Box
        sx={{
          ...boxStyle,
          display: `${component === "login" ? "flex" : "none"}`,
        }}
      >
        <Typography sx={{ color: "black" }}>
          You do no have an account?{" "}
        </Typography>

        <Link
          component="button"
          variant="body2"
          onClick={() => {
            setComponent("signup");
          }}
        >
          Sign Up
        </Link>
      </Box>
    </Box>
  );
}

export default HomePageComponent;
