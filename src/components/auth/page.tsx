"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, Box, Card, Stack, Typography, Alert } from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const PageContainer = dynamic(
  () => import("@/app/_components/container/PageContainer"),
  { ssr: false }
);
const AuthLogin = dynamic(() => import("@/app/_components/auth/AuthLogin"), {
  ssr: false,
});
const Loading = dynamic(
  () => import("@/app/_components/layout/shared/Loading"),
  { ssr: false }
);

export default function LoginPage() {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a simple loading placeholder
  }

  return <LoginPageContent />;
}

function LoginPageContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  useEffect(() => {
    const errorParam = searchParams.get("error");
    const messageParam = searchParams.get("message");

    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }

    if (messageParam === "Email verified successfully") {
      setSuccessMessage("Email verified successfully");
    }
  }, [searchParams]);

  if (status === "loading" || isLoading) {
    return <Loading />;
  }

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        const from = searchParams.get("from") || "/dashboard";
        router.push(from);
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    status === "unauthenticated" && (
      <PageContainer
        title="Welcome to Atlas Agent"
        description="Login to Atlas Agent"
      >
        <Box
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
              backgroundSize: "400% 400%",
              animation: "gradient 15s ease infinite",
              position: "absolute",
              height: "100%",
              width: "100%",
              opacity: "0.3",
            },
          }}
        >
          <Grid
            container
            spacing={0}
            justifyContent="center"
            sx={{ height: "100vh" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              lg={7}
              xl={8}
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box position="relative">
                <Box px={3}>
                  <Image
                    priority
                    src={"/images/logos/dark-logo.svg"}
                    alt="logo"
                    width={460}
                    height={150}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      paddingTop: "3rem",
                    }}
                  />
                </Box>
                <Box
                  alignItems="center"
                  justifyContent="center"
                  height={"calc(100vh - 75px)"}
                >
                  <Image
                    src={"/images/backgrounds/login-bg.svg"}
                    alt="bg"
                    width={500}
                    height={500}
                    priority
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      maxHeight: "500px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={5}
              xl={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card
                elevation={9}
                sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "450px" }}
              >
                {successMessage && (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    {successMessage}
                  </Alert>
                )}

                {error && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                  </Alert>
                )}
                <AuthLogin />
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  mt={3}
                >
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                  >
                    New to Atlas Agent?
                  </Typography>

                  <Link
                    href="/auth/signup"
                    style={{ textDecoration: "none" }}
                    passHref
                  >
                    <Typography
                      component="span"
                      fontWeight="500"
                      sx={{
                        textDecoration: "none",
                        color: "primary.main",
                      }}
                    >
                      Create an account
                    </Typography>
                  </Link>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    )
  );
}
