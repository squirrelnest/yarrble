import React, { Component } from 'react';
import paradise from '../img/paradise.jpg';
import { Card, CardHeader, CardContent, Avatar, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const styles = {
  card: {
    marginBottom: '20px',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  chip: {
    margin: '0px 4px 18px',
  },
  subheader: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

const tilesData = [
  {
    img: paradise,
    title: 'Ao Yon Beach',
  },
]

export default class ReviewCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      like: 0,
    }
  }

  handleClick() {
    this.setState({
      like: this.state.like + 1
    })
  }

  render() {
    return (
      <Card style={styles.card}>
        <CardHeader
          title={this.props.review.author || "sailormoon"}
          subtitle="Subtitle"
          avatar={<PersonIcon />}
          actAsExpander={true}
        />
        <CardContent  >
          <p>{this.props.review.content}</p>
          <div className="row">
            <Chip
              backgroundColor={'#B2EBF2'}
              style={styles.chip}
              label="comfort"
              avatar={
                <Avatar size={32} color={'#E0F7FA'} backgroundColor={'#00BCD4'}>
                  {this.props.review.stability}
                </Avatar>
              }
            />
            <Chip
              backgroundColor={'#B2EBF2'}
              style={styles.chip}
              label="aesthetics"
              avatar={
                <Avatar size={32} color={'#E0F7FA'} backgroundColor={'#00BCD4'}>
                  {this.props.review.aesthetics}
                </Avatar>
              }
            />
            <Chip
              backgroundColor={'#B2EBF2'}
              style={styles.chip}
              label="safety"
              avatar={
                <Avatar size={32} color={'#E0F7FA'} backgroundColor={'#00BCD4'}>
                  {this.props.review.safety}
                </Avatar>
              }
            />
            <Chip
              backgroundColor={'#F8BBD0'}
              style={styles.chip}
              onClick={this.handleClick.bind(this)}
              label="likes"
              avatar={
                <Avatar size={32} color={'#F8BBD0'} backgroundColor={'#EC407A'}>
                  {this.state.like}
                </Avatar>
              }
            />
          </div>
        </CardContent >
      </Card>
    );
  }
}
