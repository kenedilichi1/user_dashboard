import {
  Avatar,
  Box,
  Card,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

function UserInfo() {
  const userData = {
    firstName: "Kabs",
    lastName: "hello",
    address: "1 green-wood steet",
    city: "Abakaliki",
    state: "Ebonyi",
    country: "Nigeria",
    email: "example@gmail.com",
    dateOfBirth: "1994/10/05",
    gender: "male",
  };
  return (
    <Paper
      sx={{
        width: "50%",
        margin: "5rem auto",
        py: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "1rem",
      }}
      elevation={7}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Box sx={{ width: "50%" }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            sx={{
              minWidth: "2rem",
              width: { md: "15rem", xs: "4rem" },
              height: { md: "15rem", xs: "4rem" },
            }}
          />
        </Box>
        <Card
          sx={{
            width: "20rem",
            background: "gray",
            p: "2rem",
            borderRadius: "1rem",
          }}
        >
          <Typography>
            Name: {userData.firstName} {userData.lastName}
          </Typography>
          <Typography>Date of Birth: {userData.dateOfBirth}</Typography>
          <Typography>Email: {userData.email}</Typography>{" "}
          <Typography>Gender: {userData.gender}</Typography>
          <Typography>
            Location: {userData.address}, {userData.city}, {userData.state},{" "}
            {userData.country}
          </Typography>
        </Card>
      </Box>
    </Paper>
  );
}

export default UserInfo;
