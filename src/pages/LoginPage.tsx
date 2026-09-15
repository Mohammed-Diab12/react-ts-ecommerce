import { Button, Stack } from "@mui/material";
import { signInWithGoogle, signInWithGithub } from "../services/authServices";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

function LoginPage() {
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();

      console.log("Google user:", user);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const user = await signInWithGithub();

      console.log("GitHub user:", user);
    } catch (error) {
      console.error("GitHub login failed:", error);
    }
  };

  return (
    <Stack spacing={2}>
      <Button variant="outlined" onClick={handleGoogleLogin}>
        <GoogleIcon sx={{ mx: 1 }} />
        Continue with Google
      </Button>

      <Button variant="outlined" onClick={handleGithubLogin}>
        <GitHubIcon sx={{ mx: 1 }} />
        Continue with GitHub
      </Button>
    </Stack>
  );
}

export default LoginPage;
