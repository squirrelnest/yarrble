import React, { Component } from 'react';
import { ListItem, ListItemText } from '@mui/material/List';
import Subheader from '@mui/material/Subheader';

export default class CountryListItem extends Component {

  state = {
    open: false,
  };

  render() {
    return (
      <div className="listicle">
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
      </div>
    );
  }
}
