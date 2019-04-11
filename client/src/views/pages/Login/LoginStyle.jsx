import backgroundImage from "../../../assets/img/bg7.jpg";

const LoginStyle = {
  Container: {
    display: "block",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    top: "20%",
    padding: "40px",
    backgroundColor: "rgba(139, 69, 19, 0.7)",
    boxSizing : "border-box",
    boxShadow: "0 15px 25px rgba(0,0,0,0.8)",
    borderRadius: "10px",
    "@media (max-width: 799.95px)": {
      width: "90%",
      padding: "10%",
      marginLeft: "5%"
    },
    "@media (min-width: 800px)": {
      width: "40%",
      minWidth: "400px",
      marginLeft: "30%",
      marginRight: "30%",
    },
  },
  Title:{
    marginBottom: "30px",
    textAlign: "center",
    fontFamily: "Helvetica, sans-serif",
    fontSize: "2em",
    fontWeight: "500",
    color: "white",
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
    borderBottom: "2px solid rgba(139, 69, 19, 0.8)",
    outline: "none",
    color: "white",
    backgroundColor: "transparent",
    "&::placeholder": {
      color: "saddlebrown",
      fontSize: "18px",
    },
  },
  Label: {
    fontWeight: "300",
    padding: "10px 0",
    fontSize: "16px",
    pointerEvents: "none",
    color: "white",
    transition: ".5s",
    "&:hover": {
      color: "white",
    }
  },
  CustomButton: {
    padding: "5px",
    width: "100%",
    color: "white",
    backgroundColor: "saddlebrown"
  },
  IconOr: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
    marginTop: "10px",
  },
  pageHeader: {
    paddingTop: "70px",
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
