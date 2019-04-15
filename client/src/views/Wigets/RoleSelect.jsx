import React          from "react";
//** @metarial-ui */
import { withStyles } from '@material-ui/core/styles';
import GridContainer  from "components/Grid/GridContainer.jsx";
import GridItem       from "components/Grid/GridItem.jsx";
import {Button}       from '@material-ui/core';

let RoleSelect = (props) => {
  let { classes, labelText, genderIs, handleOnClickDonor, handleOnClickCompany, textError } = props;
  if (textError !== '') {
    labelText = textError
  }
  return (
    <div>
      <p className={classes.labelText}>{labelText}</p>
      <GridContainer justify = "center" style={{textAlign: "center"}}>
        <GridItem xs={6} sm={6} md={6} lg={6} xl={6}>
        <div className={genderIs !== 'GUEST' ? classes.Gender : classes.ChoosedGender}>
          <Button fullWidth name="GUEST" onClick={handleOnClickDonor} >
              Donor
          </Button>
        </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className={genderIs !== 'COMPANY' ? classes.Gender : classes.ChoosedGender}>
            <Button fullWidth name="COMPANY" onClick={handleOnClickCompany}>
              Company
            </Button>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const styles = theme => ({
// style for default design
  labelText: {
    color: "#white !important",
    fontSize: "16px",
    fontFamily:"  \"Roboto\", \"Helvetica\" , \"Arial\" , sans-serif",
    fontWeight: "400",
    lineHeight: "1.42857",
  },
  Gender: {
    padding: '5px',
    border: "solid 0.5px #AAAAAA",
    color: "white !important",
  },
  ChoosedGender: {
    padding: '5px',
    backgroundColor: "white",
    color: "#8b4513 !important"
  }
});

export default withStyles(styles)(RoleSelect);
