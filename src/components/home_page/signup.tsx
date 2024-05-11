import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpDataType } from "./types";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";

const inputStyle = {
  height: "3rem",
  background: "none",
};

const formControlStyle = {
  width: { xs: "80%", md: "40%" },
};

function SignUp() {
  const [gender, setGender] = React.useState("");
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(new Date("2022-04-17").toDateString())
  );

  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const onSubmit: SubmitHandler<SignUpDataType> = (data) => {
    // let books = JSON.parse(myData);
    console.log(data);
    navigate("/dashboard");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataType>({ resolver: zodResolver(SignUpDataType) });

  return (
    <Paper
      elevation={3}
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem",
        width: { xs: "80%", md: "60%" },
        padding: "2rem 0",
        borderRadius: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        gap: "1.5rem",
        flexWrap: "wrap",
      }}
      // action={Link to}
    >
      <FormControl sx={{ ...formControlStyle }}>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your first name"
          {...register("firstName")}
          sx={{ ...inputStyle }}
        />
        {errors.firstName?.message && (
          <FormHelperText component="p">
            {errors.firstName?.message}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl sx={{ ...formControlStyle }}>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your last name"
          {...register("lastName")}
          sx={{ ...inputStyle }}
        />
        {errors.lastName?.message && (
          <FormHelperText component="p">
            {errors.lastName?.message}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl sx={{ ...formControlStyle }}>
        <FormLabel>Country</FormLabel>
        <Input
          type="text"
          placeholder="Enter your country"
          {...register("country")}
          sx={{ ...inputStyle }}
        />
        {errors.country?.message && (
          <FormHelperText component="p">
            {errors.country?.message}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl sx={{ ...formControlStyle }}>
        <FormLabel>State</FormLabel>
        <Input
          type="text"
          placeholder="Enter your state"
          {...register("state")}
          sx={{ ...inputStyle }}
        />
        {errors.state?.message && (
          <FormHelperText component="p">{errors.state?.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl sx={{ ...formControlStyle }}>
        <FormLabel>City</FormLabel>
        <Input
          type="text"
          placeholder="Enter your city"
          {...register("city")}
          sx={{ ...inputStyle }}
        />
        {errors.city?.message && (
          <FormHelperText component="p">{errors.city?.message}</FormHelperText>
        )}
      </FormControl>

      <FormControl sx={{ ...formControlStyle }}>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          placeholder="Enter your address"
          {...register("address")}
          sx={{ ...inputStyle }}
        />
        {errors.address?.message && (
          <FormHelperText component="p">
            {errors.address?.message}
          </FormHelperText>
        )}
      </FormControl>

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

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
        }}
      >
        <FormControl sx={{ ...formControlStyle, mt: "1rem" }}>
          <InputLabel>Gender</InputLabel>
          <Select
            value={gender}
            label="Gender"
            {...register("gender")}
            onChange={handleChange}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"non-binary"}>Non-Binary</MenuItem>
            {errors.city?.message && (
              <FormHelperText component="p">
                {errors.city?.message}
              </FormHelperText>
            )}
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker", "DatePicker"]}
            sx={{ width: { xs: "80%", md: "40%" }, marginTop: ".5rem" }}
          >
            <DatePicker
              label="Date of Birth"
              value={value}
              sx={{ width: "100%" }}
              {...register("dateOfBirth")}
              onChange={(newValue) => {
                return setValue(newValue);
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>

      <Button variant="contained" type="submit" sx={{ width: "8rem" }}>
        Sign up
      </Button>
    </Paper>
  );
}

export default SignUp;
