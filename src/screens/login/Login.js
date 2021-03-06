import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

import Header from "../../common/header/Header";
import "./Login.css";

const styles = {
  card: {
    padding: "15px",
    position: "relative",
    top: "90px",
    left: "50%",
    width: "325px",
    transform: "translateX(-50%)",
  },
  title: {
    fontSize: 20,
  },
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameRequired: "dispNone",
      password: "",
      passwordRequired: "dispNone",
      incorrectUsernamePassword: "dispNone",
      loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
    };
  }

  /* Method to handle loging click */
  loginClickHandler = () => {
    this.setState({ incorrectUsernamePassword: "dispNone" });
    this.state.username === ""
      ? this.setState({ usernameRequired: "dispBlock" })
      : this.setState({ usernameRequired: "dispNone" });
    this.state.password === ""
      ? this.setState({ passwordRequired: "dispBlock" })
      : this.setState({ passwordRequired: "dispNone" });

    if (this.state.username === "" || this.state.password === "") {
      return;
    }

    if (this.state.username === "admin" && this.state.password === "admin") {
      sessionStorage.setItem("username", "admin");
      sessionStorage.setItem(
        "access-token",
        "IGQVJWYVNNQ3A5cmpQNUFoS3BSVXlmVjBicmdteWVpejZANQ2I5RnpCZA1BZAOG9xYk9STDE1TVctczFtOEp3dGs3bTZAEbVpGZAE9IbDVHeWc1ZAFNqOVNoa3ZAuQ0hHMEFBa1lQNUdGcHdkYzBFM3U0clpKZAwZDZD"
      );
      this.setState({ loggedIn: true });
      this.navigateToHome();
    } else {
      this.setState({ incorrectUsernamePassword: "dispBlock" });
    }
  };

  /* Method to handle Home button click */
  navigateToHome = () => {
    this.props.history.push("/home");
  };

  /* Method that is triggered when user name is changed. */
  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

   /* Method that is triggered when password is changed. */
  inputPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div className="main-container">
        <Header screen={"Login"} />
        <Card style={styles.card}>
          <CardContent>
            <Typography style={styles.title}> LOGIN </Typography>
            <br />
            <FormControl required style={{ width: "100%" }}>
              <InputLabel htmlFor="username"> Username </InputLabel>
              <Input
                id="username"
                type="text"
                username={this.state.username}
                onChange={this.inputUsernameChangeHandler}
              />
              <FormHelperText className={this.state.usernameRequired}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br />
            <br />
            <FormControl required style={{ width: "100%" }}>
              <InputLabel htmlFor="password"> Password </InputLabel>
              <Input
                id="password"
                type="password"
                onChange={this.inputPasswordChangeHandler}
              />
              <FormHelperText className={this.state.passwordRequired}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br />
            <br />
            <div className={this.state.incorrectUsernamePassword}>
              <span className="red"> Incorrect username and/or password </span>
            </div>
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={this.loginClickHandler}
            >
              {" "}
              LOGIN{" "}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Login;
