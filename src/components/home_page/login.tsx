import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Paper,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { LogDataType } from "./types";

const inputStyle = {
  height: "3rem",
  background: "none",
};

const formControlStyle = {
  width: { xs: "80%", md: "80%" },
};

function Login() {
  const onSubmit: SubmitHandler<LogDataType> = (data) => {
    // let books = JSON.parse(myData);
    console.log(data);
    // return <Link to="product" />;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogDataType>({ resolver: zodResolver(LogDataType) });

  return (
    <Paper
      elevation={4}
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem",
        width: { xs: "80%", md: "30%" },
        padding: { xs: "2rem 0", md: "2rem 2rem" },
        borderRadius: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        gap: "1.5rem",
        flexWrap: "wrap",
        pt: "4rem",
        mt: "10rem",
        // height: { xs: "initial", md: "18rem" },
      }}
    >
      <FormControl sx={{ ...formControlStyle }}>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          placeholder="Enter your email address"
          {...register("email")}
          sx={{ ...inputStyle }}
        />
        {errors.email?.message && (
          <FormHelperText component="p">{errors.email?.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl sx={{ ...formControlStyle }}>
        <FormLabel>Password</FormLabel>
        <Input
          type="text"
          placeholder="Enter your password"
          {...register("password")}
          sx={{ ...inputStyle }}
        />
        {errors.password?.message && (
          <FormHelperText component="p">
            {errors.password?.message}
          </FormHelperText>
        )}
      </FormControl>

      <Button
        variant="contained"
        type="submit"
        sx={{ width: "8rem", mt: "2rem" }}
      >
        Login
      </Button>
    </Paper>
  );
}

export default Login;
