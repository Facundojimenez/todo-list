import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CustomTheme from "./context/CustomTheme";
import { ThemeProvider } from "@emotion/react";
import {UserProvider}  from "./context/UserContext";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  body: {
    backgroundColor: CustomTheme.palette.background.default,
    height: "100%"
  } 
})


function App() {
  const classes = useStyles();
  return (
    <>
      <UserProvider>
        <ThemeProvider theme={CustomTheme} >
          <BrowserRouter>
            <div className={classes.body}>
              <Routes>
                <Route path="/login" element={ <Login/>}/> 
                <Route path="/signup" element={ <SignUp/>}/> 
                <Route path="/dashboard" element={ <DashboardPage/>}/> 
              </Routes>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
