import React, {Component, Fragment} from 'react';
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import People from '@material-ui/icons/People';
// core components
import CustomInput from 'components/CustomInput/CustomInput.jsx';
//** Import file */
import "../css/CreateProjectSection.css";
import ImageUpload from './ImageUpload.jsx';

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-kit-pro-react/customSelectStyle.jsx";

class CreateProjectSection extends Component {
  render() {
    const { 
      classes,
      handleOnChange, 
      categoryList, 
      countryList,
      handleCategorySelect,
      categoryIdSelect,
      countryIdSelect,
      handleCountrySelect,
      handleOnlickCreateProject,
      getImageLink
    } = this.props;
    console.log("categoryList:", categoryList);
    console.log("countryList:", countryList);

    return (
      <Fragment>
        <div className="CreateProject-grid-container">
          <CustomInput
            labelText="FirstName"
            id="firstName"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (<InputAdornment position="end"><People/></InputAdornment>),
              onChange: handleOnChange,
              name: "firstName"
            }}
          />
          <CustomInput
            labelText="LastName"
            id="lastName"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (<InputAdornment position="end"><People/></InputAdornment>),
              onChange: handleOnChange,
              name: "lastName"
            }}
          />
          <CustomInput
            labelText="phone"
            id="phone"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (<InputAdornment position="end"><People/></InputAdornment>),
              onChange: handleOnChange,
              name: "phone"
            }}
          />
          <CustomInput
            labelText="Title"
            id="title"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (<InputAdornment position="end"><People/></InputAdornment>),
              onChange: handleOnChange,
              name: "title"
            }}
          />
          <CustomInput
            labelText="Introduce"
            id="about"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (<InputAdornment position="end"><People/></InputAdornment>),
              onChange: handleOnChange,
              name: "about"
            }}
          />
          <CustomInput
            labelText="Amount"
            id="amount"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (<InputAdornment position="end"><People/></InputAdornment>),
              onChange: handleOnChange,
              name: "amount",
              type: "number"
            }}
          />
          {/* Category select */}
          <FormControl
            fullWidth
            className={classes.selectFormControl}>
            <InputLabel
              htmlFor="simple-select"
              className={classes.selectLabel}
              style={{ color: '#495057' }}
            >
              Category
            </InputLabel>
            <Select
              MenuProps={{
                className: classes.selectMenu
              }}
              classes={{
                select: classes.select
              }}
              value={categoryIdSelect}
              onChange={handleCategorySelect}
              inputProps={{
                name: "categoryIdSelect",
                id: "categoryIdSelect"
              }}>
              <MenuItem
                disabled
                classes={{
                  root: classes.selectMenuItem
                }}>
                Which category are your project belong to ?
              </MenuItem>
              {
                categoryList.map((category, index) =>{
                  return (
                    <MenuItem
                      key={index}
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value={category._id}>
                      {category.name}
                    </MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
          {/* Country select */}
          <FormControl
            fullWidth
            className={classes.selectFormControl}>
            <InputLabel
              htmlFor="simple-select"
              className={classes.selectLabel}
              style={{ color: '#495057' }}
            >
              Country
            </InputLabel>
            <Select
              MenuProps={{
                className: classes.selectMenu
              }}
              classes={{
                select: classes.select
              }}
              value={countryIdSelect}
              onChange={handleCountrySelect}
              inputProps={{
                name: "countryIdSelect",
                id: "countryIdSelect"
              }}>
              <MenuItem
                disabled
                classes={{
                  root: classes.selectMenuItem
                }}>
                Which country are your project belong to ?
              </MenuItem>
              {
                countryList.map((country, index) =>{
                  return (
                    <MenuItem
                      key={index}
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value={country._id}>
                      {country.name}
                    </MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
          <Button
            style={{ width: "100%", backgroundColor: "sandybrown", color: "white" }}
            onClick={handleOnlickCreateProject}
          >
            Create
          </Button>
          <ImageUpload/>


          {/* <form action="/localhost:3000/api/version1/upload" method="post" encType="multipart/form-data">
            <div>
              <label htmlFor="file">Choose a file</label>
              <input type="file" id="file" name="myFile"/>
            </div>
            <div>
              <button>Send the file</button>
            </div>
          </form> */}
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CreateProjectSection);
