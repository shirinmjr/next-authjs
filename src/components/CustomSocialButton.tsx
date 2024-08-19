"use client";
import { Button } from "@mui/material";

const CustomSocialButton = (props: any) => {
  // Define your styles outside of the Button component
  const styles = {
    border: `1px solid `,
    "&:hover": {
      color: "black",
    },
  };

  return (
    <Button
      variant="outlined"
      size="large"
      color="inherit"
      sx={styles} // Apply the styles directly
      {...props}
    />
  );
};

export default CustomSocialButton;
