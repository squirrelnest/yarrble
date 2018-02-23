import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
// import ActionGrade from 'material-ui/svg-icons/action/grade';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';
// import s from 'material-ui/svg-icons/content/drafts';
// import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';

export default class Listy extends Component {

  state = {
    open: false,
  };

  render() {
    return (
      <div>

        <List>
          <Subheader>Nested List Items</Subheader>
          <ListItem primaryText="Philippines" />
          <ListItem primaryText="Brazil" />
          <ListItem
            primaryText="Seychelles"
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Abacus"
              />,
              <ListItem
                key={2}
                primaryText="Royal Anse"
                disabled={true}
              />,
              <ListItem
                key={3}
                primaryText="Omumu"
                open={this.state.open}
                onNestedListToggle={this.handleNestedListToggle}
              />,
            ]}
          />
        </List>

      </div>
    );
  }
}
