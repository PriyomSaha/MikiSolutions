import React, { useRef, useState, memo } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  styled,
  CircularProgress,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import Grid from "@mui/material/Grid";

const ContactUsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
  color: "white",
  textAlign: "center",
  padding: "1rem",
});

const ContactUs = memo(() => {
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const firstNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [sendingUpdate, setSendingUpdate] = useState(false);

  const sendEmail = async (e) => {
    await setSendingUpdate(true);
    e.preventDefault();
    try {
      console.log(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        { firstName, lastName, email, message }
      );

      if (validate()) {
        await emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            {
              first_name: firstName,
              last_name: lastName,
              user_email: email,
              message: message,
            },
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("Message sent successfully!");
              setFirstName("");
              setLastName("");
              setEmail("");
              setMessage("");
            },
            (error) => {
              console.log(error.text);
              alert("Failed to send message, please try again.");
            }
          );
      }
    } finally {
      setSendingUpdate(false);
    }
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = firstName ? "" : "First Name is required";
    tempErrors.lastName = lastName ? "" : "Last Name is required";
    tempErrors.email = email ? "" : "Email is required";
    tempErrors.message = message ? "" : "Message is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  return (
    <ContactUsContainer name="contactus">
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "3rem",
          },
        }}
      >
        Contact Us
      </Typography>
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "600px",
            lg: "800px",
            xl: "900px",
          },
          mb: 2,
          mt: 1,
        }}
        className="descriptionTextContainer"
      >
        <Typography variant="body2" gutterBottom>
          Ready to take your business to the next level? Let’s build something
          great together. Contact Miki Solutions today and embark on a journey
          of digital transformation with a partner you can trust.
        </Typography>
      </Box>
      <Box className="descriptionTextContainer" noValidate autoComplete="off">
        <Grid container columnSpacing={1.5}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={firstNameRef}
              id="firstName"
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!!errors.firstName}
              helperText={errors.firstName}
              fullWidth
              margin="normal"
              size="small"
              InputProps={{
                style: { color: "white", borderColor: "white" },
              }}
              InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.7)" } }}
              className="white-border"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={lastNameRef}
              id="lastName"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={!!errors.lastName}
              helperText={errors.lastName}
              fullWidth
              margin="normal"
              size="small"
              InputProps={{
                style: { color: "white", borderColor: "white" },
              }}
              InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.7)" } }}
              className="white-border"
            />
          </Grid>
        </Grid>
        <TextField
          inputRef={emailRef}
          id="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          margin="normal"
          size="small"
          InputProps={{
            style: { color: "white", borderColor: "white" },
          }}
          InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.7)" } }}
          className="white-border"
        />
        <TextField
          inputRef={messageRef}
          id="message"
          label="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={!!errors.message}
          helperText={errors.message}
          multiline
          rows={4}
          fullWidth
          margin="normal"
          size="small"
          InputProps={{
            style: { color: "white", borderColor: "white" },
          }}
          InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.7)" } }}
          className="white-border"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={sendEmail}
          fullWidth
          sx={{ mt: 2 }}
          disabled={sendingUpdate}
          startIcon={sendingUpdate ? <CircularProgress size={24} /> : null}
        >
          {sendingUpdate ? "" : "Submit"}
        </Button>
      </Box>
    </ContactUsContainer>
  );
});

export default ContactUs;
