import backgroundImage from "./imgs/background.jpg";

const LoginStyle = {
  Container: {
    display: "block",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    top: "30%",
    padding: "40px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxSizing : "border-box",
    boxShadow: "0 15px 25px rgba(0,0,0,.5)",
    borderRadius: "10px",
    "@media (max-width: 599.95px)": {
      width: "90%",
      padding: "10%",
    },
    "@media (min-width: 600px)": {
      width: "30%",
      minWidth: "400px",
    },
  },
  Title:{
    marginBottom: "30px",
    textAlign: "center",
    fontFamily: "Helvetica, sans-serif",
    fontSize: "2em",
    fontWeight: "500",
    color: "rgba(162, 226, 255, 1)",
  },
  InputBox: {
    position: "relative",
  },
  Input: {
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
    width: "90%",
    border: "none",
    borderBottom: "1px solid rgba(162, 226, 255, 0.8)",
    outline: "none",
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
    "&::placeholder": {
      color: "rgba(162, 226, 255, 0.5)",
      fontSize: "18px",
    },
  },
  Label: {
    fontWeight: "300",
    padding: "10px 0",
    fontSize: "16px",
    pointerEvents: "none",
    fontSize: "16px",
    color: "rgba(162, 226, 255, 0.9)",
    transition: ".5s",
    "&:hover": {
      color: "white",
    }
  },
  CustomButton: {
    padding: "5px",
    width: "100%",
    color: "rgba(162, 226, 255, 1)",
    backgroundColor: "rgba(6, 92, 132, 1)"
  },
  IconOr: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
    marginTop: "10px",
  },
  pageHeader: {
    backgroundImage: "url(" + backgroundImage + ")",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    minHeight: "100vh",
    maxHeight: "1200px",
    height: "auto",
    margin: "0",
    padding: "0",
    border: "0",
    "&:before": {
      background: "rgba(0, 0, 0, 0.2)"
    },
    "@media (max-width: 599.95px)": {
      backgroundPosition: "top right",
      gridTemplateColumns: "5% auto 5%",
    },
  },
}

export default LoginStyle;
