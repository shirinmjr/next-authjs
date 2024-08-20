"use client";
import { Backdrop, Button } from "@mui/material";

const CustomSocialButton = (props: any) => {
  // Define your styles outside of the Button component
  const styles = {
    border: "2px solid",
    borderRadius: "0.5em",
    backgroundColor: "",

    "&:hover": {
      color: "black",
    },
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="large"
        color="inherit"
        sx={styles} // Apply the styles directly
        {...props}
      />
    </div>
  );
};

export default CustomSocialButton;
