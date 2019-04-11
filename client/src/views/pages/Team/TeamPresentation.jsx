import React, { Fragment } from 'react';
import { Chart } from "react-charts";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactImageMagnify from 'react-image-magnify';

import NavBar from '../Home/sections/Navbar';
import TitleSection from '../Home/sections/TitleSection';
import watchImg300 from '../../../assets/img/pizza.png';
import watchImg1200 from '../../../assets/img/pizza.png';

class TeamContainer extends React.Component {
  render() {
    const { listMember, classes } = this.props;
    return (
      <Fragment>
        <NavBar/>
        <TitleSection kind="My List Member"/>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell >Name</TableCell>
                <TableCell numeric>Phone</TableCell>
                <TableCell numeric>Level</TableCell>
                <TableCell numeric>Email</TableCell>
                <TableCell numeric>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listMember.map(member => {
                return (
                  <TableRow className={classes.row} key={member.id}>
                    <TableCell component="th" scope="row">
                      {member.name}
                    </TableCell>
                    <TableCell numeric>{member.phone}</TableCell>
                    <TableCell numeric>{member.level}</TableCell>
                    <TableCell numeric>{member.email}</TableCell>
                    <TableCell numeric>{member.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <TitleSection kind="My Chart"/>
        <div
          style={{
            width: "100%",
            height: "300px"
          }}
        >
          <Chart
            data={[
              {
                label: "Series 1",
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
              },
              {
                label: "Series 2",
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
              },
              {
                label: "Series 3",
                data: [[0, 4], [1, 3], [2, 1], [3, 4], [4, 5]]
              }
            ]}
            axes={[
              { primary: true, type: "linear", position: "bottom" },
              { type: "linear", position: "left" }
            ]}
          />
        </div>
        <TitleSection kind="Zoom picture"/>
        <div style={{ display: 'flex', alignItems: "center", alignContent: "center" }}>
          <ReactImageMagnify
          style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} 
           {...{
              smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  width: 400,
                  height: 400,
                  src: watchImg300
              },
              largeImage: {
                  src: watchImg1200,
                  width: 1200,
                  height: 1800
              }
          }} />
        </div>
      </Fragment>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop:  "50px",
    overflowX: "auto",
  },
  table: {
    minWidth: 500,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: "grey",
    },
  },
});

TeamContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamContainer);