import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class AddReviewForm extends Component {

    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.props.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          disabled={true}
          onClick={this.props.handleClose}
        />,
      ];

      return (
        <div>

          <Dialog
            title="Dialog With Actions"
            actions={actions}
            style={{ zIndex: 3000 }}
            modal={true}
            open={this.props.open}
          >
            Only actions can close this dialog.
          </Dialog>

        </div>
      );
    }
  }
