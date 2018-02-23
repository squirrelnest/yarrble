import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CountryListItem from './CountryListItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountries } from './actions/countryActions';

export default class Listy extends Component {

  state = {
    open: false,
  };

  componentDidMount() {
    this.props.fetchCountries()
  }

  render() {

    const countries = this.props.countries.map((country) =>
      <CountryListItem key={country.id} />
    );

    return (
      <div className="listy">

        <List>
          <Subheader>Anchorages</Subheader>
          {countries}
        </List>

      </div>
    );
  }
}

Listy.defaultProps = { countries: [] }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCountries}, dispatch)
}

function mapStateToProps(state){
  return {countries: state.countries.countries}
}

export const WrapperListy = connect(mapStateToProps, mapDispatchToProps)(Listy)
