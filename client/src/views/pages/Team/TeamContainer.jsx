import React, {Component} from 'react';
//** Import file */
import Team from './TeamPresentation';

class TeamContainer extends Component {
  state={
    listMember: [
      {
        id: 1,
        name: 'John',
        phone: '0902131213',
        level: 2,
        email: 'john@gmail.com',
        status: 'ONLINE'
      },
      {
        id: 2,
        name: 'Thahaway',
        phone: '090989789',
        level: 3,
        email: 'Thahaway@gmail.com',
        status: 'ONLINE'
      },
      {
        id: 3,
        name: 'Maria',
        phone: '04324324324',
        level: 1,
        email: 'Maria99@gmail.com',
        status: 'OFFLINE'
      },
      {
        id: 4,
        name: 'Hawataxi',
        phone: '07234324242',
        level: 5,
        email: 'Hawa35@gmail.com',
        status: 'ONLINE'
      },
      {
        id: 5,
        name: 'Katarina',
        phone: '0324324242',
        level: 4,
        email: 'katarina123@gmail.com',
        status: 'ONLINE'
      }
    ]
  }

  render() {
    const { listMember } = this.state;
    return (
      <Team
        listMember={listMember}
      />
    );
  }
}

export default TeamContainer;
