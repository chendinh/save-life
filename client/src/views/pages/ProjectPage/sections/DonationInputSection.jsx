import React, {Component, Fragment} from 'react';
import axios from 'axios';
import _ from "lodash";

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from 'components/CustomButtons/Button.jsx';
import ArrowBack from '@material-ui/icons/ArrowBack'; 
import AttachMoney from '@material-ui/icons/AttachMoney';

import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import People from '@material-ui/icons/People';
// core components
import CustomInput from 'components/CustomInput/CustomInput.jsx';

class DonationInputSection extends Component {
  state = {
    fields: {

    },
    errorMess: '',
  }

  handleOnChange = event => {
    const fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    console.log(fields[event.target.name] + " change to " + event.target.value)
    this.setState(() => ({
      fields
    }));
  };

  componentDidMount() {
    console.log("donation section props", this.props);
    localStorage.setItem("isDonated", null);
  }

  handleDonate = () => {
    // /api/version1/donates/
    let percent = this.state.fields.amountMoney / ( _.get(this.props.projectInfo, 'amount') / 100) ;
    console.log("tokenUser:", localStorage.getItem("tokenUser"))
    console.log("percent:", percent)
    console.log("amountMoney:", this.state.fields.amountMoney)


    axios.post('http://localhost:3000/api/version1/donates/', {
      userId: localStorage.getItem("userID"),
      projectId: _.get(this.props.projectInfo, '_id'),
      percent: percent,
      amount: this.state.fields.amountMoney,
      note: this.state.fields.note
      },{
        headers: {
          // 'Content-Type': 'application/json',
          'x-authorization-token': localStorage.getItem("tokenUser")
        }
      })
      .then(function (response) {
        if(response.data.errorCode === 0) {
          console.log(response);
          localStorage.setItem("isDonated", "true");
        }else {
          console.log(response);
          localStorage.setItem("isDonated", "false");
        }
      })
  }

  render() {
    const { classes, handleDonateFalse } = this.props;
    return (
      <Fragment>
        <Button
          round={true}
          style={{
            color: 'white', 
            fontWeight: 500, 
            fontFamily: 'sans-serif',
            padding: '5px 10px',
            backgroundColor: 'saddlebrown',
          }}
          onClick={handleDonateFalse}
        >
          <ArrowBack/> 
          Back to Project
        </Button>
        <div
          className={classes.container}
        >
          <CustomInput
            labelText="Amount of Money"
            id="amountMoney"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (<InputAdornment position="end"><People/></InputAdornment>),
              onChange: this.handleOnChange,
              name: "amountMoney",
              type: "number"
            }}
          />
          <CustomInput
            labelText="Note"
            id="note"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (<InputAdornment position="end"><People/></InputAdornment>),
              onChange: this.handleOnChange,
              name: "note",
            }}
          />
          <Button
            style={{
              color: 'white', 
              fontWeight: 500, 
              fontFamily: 'sans-serif',
              padding: '5px 10px',
              backgroundColor: 'saddlebrown',
            }}
            onClick={this.handleDonate}
          >
            <AttachMoney/> 
            Donate Now
          </Button>
        </div>
      </Fragment>
    )
  }
}
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: "50%",
    margin: "auto"
  },
  textField: {
    fontColor: "saddlebrown",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
  },
});
export default withStyles(styles)(DonationInputSection);