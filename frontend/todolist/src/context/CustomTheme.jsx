import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const CustomTheme = createTheme({
    status: {
      danger: orange[500],
    },
  });

  export default CustomTheme;