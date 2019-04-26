import React, {Component} from 'react';

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import _ from "lodash";

class DonationCard extends Component {
  render() {
    const { donation } = this.props;
    let note = "'" + donation.note + "'"; 
    let amountOfMoney = "$" + donation.amount 
    return (
      <Card style={{ width: "20rem" }}>
        <CardHeader color="warning">{_.get(donation.userId, 'username')}</CardHeader>
        <List component="nav">
          <ListItem>
            <ListItemText primary={amountOfMoney} />
          </ListItem>
          <ListItem>
            <ListItemText primary={note}  />
          </ListItem>
        </List>
      </Card>
    );
  }
}

export default DonationCard;