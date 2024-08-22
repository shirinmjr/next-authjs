"use client";
import { Stack } from "@mui/system";
import { Avatar, Box } from "@mui/material";
import { signIn } from "next-auth/react";
import CustomSocialButton from "./CustomSocialButton";

interface AuthSocialButtonsProps {
  title: string;
  loginTo: string;
  socialLogo: string;
}

const AuthSocialButtons = ({
  title,
  loginTo,
  socialLogo,
}: AuthSocialButtonsProps) => {
  return (
    <div className="flex justify-start">
      <Stack direction="column" justifyContent="start" spacing={2} mt={3}>
        <CustomSocialButton
          onClick={() =>
            signIn(loginTo, { redirectTo: "/dashboard/landing-page" })
          }
        >
          <Avatar
            alt={socialLogo}
            src={socialLogo}
            sx={{
              width: 26,
              height: 26,
              borderRadius: 0,
              mr: 1,
            }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              whiteSpace: "nowrap",
              mr: { sm: "4px" },
            }}
          >
            Sign in with
          </Box>
          {title}
        </CustomSocialButton>
      </Stack>
    </div>
  );
};

export default AuthSocialButtons;
