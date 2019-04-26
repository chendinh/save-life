import React, {Component,Fragment} from 'react';
//** Import file */
import Navbar from "./sections/Navbar.jsx";
import MainBanner from "./sections/MainBanner.jsx";
import CategorySection from "./sections/CategorySection.jsx";
import ProjectCategorySection from "./sections/ProjectCategorySection.jsx";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';

// core components

import styles from "assets/jss/material-kit-pro-react/customSelectStyle.jsx";

class HomePresentation extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      simpleSelect: "",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSearchByCountry = () => {

  }

  render() {
    const { 
      handleOnLickDiscover, 
      handleOnClick, 
      handleSearchCountryOnClick,
      isProjectListShow,
      countryID, 
      categoryID, 
      categoryName 
    } = this.props;
    const { classes } = this.props;

    const SearchSection = () => (
      <div 
        style={{
          display: 'block',
          width: '50%',
          margin: 'auto'
        }}
      >
        <FormControl
            style={{ width: '70%'}}
            className={classes.selectFormControl}>
            <InputLabel
              htmlFor="simple-select"
              className={classes.selectLabel}>
              Search by country
            </InputLabel>
            <Select
              MenuProps={{
                className: classes.selectMenu
              }}
              classes={{
                select: classes.select
              }}
              value={this.state.simpleSelect}
              onChange={this.handleSimple}
              inputProps={{
                name: "simpleSelect",
                id: "simple-select"
              }}>
              <MenuItem
                disabled
                classes={{
                  root: classes.selectMenuItem
                }}>
                Multiple Select
              </MenuItem>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
                }}
                value="5c80976880cb9412cc523d12">
                Viet Nam
              </MenuItem>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
                }}
                value="5c84d7326407b01d80cb1d5c">
                Japan
              </MenuItem>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
                }}
                value="5c84e956f6e1c70fa4baddb2">
                India
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            round
            style={{
              color: 'white', 
              fontWeight: 500, 
              fontFamily: 'sans-serif',
              padding: '5px 10px',
              backgroundColor: 'saddlebrown',
              width: '22%',
              marginLeft: '2%'
            }}
            onClick={() => handleSearchCountryOnClick(this.state.simpleSelect)}
          >
            <Search/> 
            Search
          </Button>
      </div>
    )

    return (
      <Fragment>
        <Navbar handleOnLickDiscover={handleOnLickDiscover}/>
        <MainBanner categoryName={categoryName}/>
        {isProjectListShow 
          ?
            <ProjectCategorySection 
              countryID={countryID?countryID:null}
              categoryID={categoryID?categoryID:null}
              categoryName={categoryName}
            />
          : 
            <Fragment>
              <SearchSection/>
              <CategorySection handleOnClick={handleOnClick}/>
            </Fragment>
        }   
      </Fragment>
    );
  }
}

export default withStyles(styles)(HomePresentation);
