"use client";
import { Stack } from "@mui/system";
import { Avatar, Box } from "@mui/material";
import { signIn } from "next-auth/react";
import CustomSocialButton from "../CustomSocialButton";
interface AuthSocialButtonsProps {
  title: string;
  loginTo: string;
}
const AuthSocialButtons = ({ title, loginTo }: AuthSocialButtonsProps) => {
  return (
    <>
      <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
        <CustomSocialButton
          onClick={() => signIn(loginTo, { redirectTo: "/" })}
        >
          <Avatar
            src={"/images/svgs/google-icon.svg"}
            alt={title}
            sx={{ width: 16, height: 16, borderRadius: 0, mr: 1 }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              whiteSpace: "nowrap",
              mr: { sm: "3px" },
            }}
          >
            Sign in with
          </Box>
          {title}
        </CustomSocialButton>
      </Stack>
    </>
  );
};

export default AuthSocialButtons;
