import React            from "react";
//** @metarial-ui */
import GridContainer    from "components/Grid/GridContainer.jsx";
import GridItem         from "components/Grid/GridItem.jsx";
import CheckCircleOutlineRounded from "@material-ui/icons/CheckCircleOutlineRounded"
import Button           from '@material-ui/core/Button';

let PolicyCheck = (props) => {
  let { textError, handleOnClick, isChecked} = props;
  let $content = (
    <span> Agree with our <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
      policy
    </a> </span> )
  return (
    <GridContainer justify = "center" style={{margin:"0", textAlign: "center"}}>
      {isChecked === false ?
        <GridItem>
          <Button onClick={handleOnClick}>
            <CheckCircleOutlineRounded/>
          </Button>
          {textError ? textError  : $content}
        </GridItem> :
        <GridItem>
          <Button color="secondary" onClick={handleOnClick}>
            <CheckCircleOutlineRounded/>
          </Button>
          {textError ? textError  : $content}
        </GridItem>
      }
    </GridContainer>
  );
}

export default PolicyCheck;
