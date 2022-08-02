import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CustomTheme from "./context/CustomTheme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <>
      <ThemeProvider theme={CustomTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <Login/>}/> 
            <Route path="/signup" element={ <SignUp/>}/> 
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
