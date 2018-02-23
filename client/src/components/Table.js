import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    nickname: 'John Smith',
    longitude: '23',
    latitude: '47',
    content: 'Lorem Ipsum',
    stability: '5',
  },
  {
    nickname: 'Randal White',
    longitude: '23',
    latitude: '47',
    content: 'Lorem Ipsum',
    stability: '5',
  },
  {
    nickname: 'Stephanie Sanders',
    longitude: '23',
    latitude: '47',
    content: 'Lorem Ipsum',
    stability: '5',
  },
  {
    nickname: 'Steve Brown',
    longitude: '23',
    latitude: '47',
    content: 'Lorem Ipsum',
    stability: '5',
  },
  {
    nickname: 'Joyce Whitten',
    longitude: '23',
    latitude: '47',
    content: 'Lorem Ipsum',
    stability: '5',
  },
  {
    nickname: 'Samuel Roberts',
    longitude: '23',
    latitude: '47',
    content: 'Lorem Ipsum',
    stability: '5',
  },
  {
    nickname: 'Adam Moore',
    longitude: '23',
    latitude: '47',
    content: 'Lorem Ipsum',
    stability: '5',
  },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class Tabley extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: false,
    stripedRows: false,
    showRowHover: true,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: true,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.nickname]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="6" tooltip="Super Header" style={{textAlign: 'center'}}>
                My Reviews
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="id">id</TableHeaderColumn>
              <TableHeaderColumn tooltip="nickname">nickname</TableHeaderColumn>
              <TableHeaderColumn tooltip="longitude">longitude</TableHeaderColumn>
              <TableHeaderColumn tooltip="latitude">latitude</TableHeaderColumn>
              <TableHeaderColumn tooltip="stability">stability</TableHeaderColumn>
              <TableHeaderColumn tooltip="content">content</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.nickname}</TableRowColumn>
                <TableRowColumn>{row.longitude}</TableRowColumn>
                <TableRowColumn>{row.latitude}</TableRowColumn>
                <TableRowColumn>{row.stability}</TableRowColumn>
                <TableRowColumn>{row.content}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>

      </div>
    );
  }
}
