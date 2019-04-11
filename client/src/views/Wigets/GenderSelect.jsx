import React          from "react";
//** @metarial-ui */
import { withStyles } from '@material-ui/core/styles';
import GridContainer  from "components/Grid/GridContainer.jsx";
import GridItem       from "components/Grid/GridItem.jsx";
import {Button}       from '@material-ui/core';

let GenderSection = (props) => {
  let { classes, labelText, genderIs, handleOnClickMale, handleOnClickFemale, textError } = props;
  if (textError !== '') {
    labelText = textError
  }
  return (
    <div>
      <p className={classes.labelText}>{labelText}</p>
      <GridContainer justify = "center" style={{textAlign: "center"}}>
        <GridItem xs={6} sm={6} md={6} lg={6} xl={6}>
        <div className={genderIs !== 'Male' ? classes.Gender : classes.ChoosedGender}>
          <Button fullWidth name="Male" onClick={handleOnClickMale} >
              Male
          </Button>
        </div>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} lg={6} xl={6}>
          <div className={genderIs !== 'Female' ? classes.Gender : classes.ChoosedGender}>
            <Button fullWidth name="Female" onClick={handleOnClickFemale}>
              Female
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
    color: "#AAAAAA !important",
    fontSize: "16px",
    fontFamily:"  \"Roboto\", \"Helvetica\" , \"Arial\" , sans-serif",
    fontWeight: "400",
    lineHeight: "1.42857",
  },
  Gender: {
    padding: '5px',
    border: "solid 0.5px #AAAAAA",
    color: "#AAAAAA !important",
  },
  ChoosedGender: {
    padding: '5px',
    backgroundColor: "#AAAAAA",
    color: "white !important"
  }
});

export default withStyles(styles)(GenderSection);
