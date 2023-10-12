import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Logout() {
  const [logout1, setLogout1] = useState(false);
  const nav = useNavigate();
  const loc = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    setLogout1(true);
    nav("/");
    window.location.reload();
  };
  return (
    <div>
      {loc.pathname === "/Logout" && (
        <div className="alert-container">
          <Stack sx={{ width: "50%" }} spacing={2}>
            <Alert
              severity="warning"
              action={
                <>
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    YES
                  </Button>
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => {
                      nav("/");
                    }}
                  >
                    NO
                  </Button>
                </>
              }
            >
              Do You Want To Logout —
            </Alert>
          </Stack>
        </div>
      )}
      {logout1 && (
        <div className="alert-container">
          <Stack sx={{ width: "100%" }} spacing={10}>
            <Alert severity="success">Logouted Successfully!</Alert>
          </Stack>
        </div>
      )}
    </div>
  );
}
