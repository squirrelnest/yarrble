import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export default class Listy extends Component {

  state = {
    open: false,
  };

  componentDidMount() {
    console.log(this.props.locations)
  }

  render() {

    const locations = this.props.locations.map( (loc) =>
      <ListItem
        primaryText={loc.nickname}
        initiallyOpen={true}
        primaryTogglesNestedList={true}
      />
    )

    return (
      <div className="listy">

        <List>
          <Subheader>Anchorages</Subheader>
          {locations}
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
