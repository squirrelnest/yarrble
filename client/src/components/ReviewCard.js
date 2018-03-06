import React, { Component } from 'react';
import paradise from '../img/paradise.jpg';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const styles = {
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

/* FUNCTIONAL STATELESS COMPONENT */

/* You don't need a return() function if you don't use curly braces inside an arrow function */

function latest_updated(current, next) {
  if (current.updated_at > next.updated_at) {
    return -1;
  } else if (current.updated_at < next.updated_at) {
    return 1;
  } else {
    return 0;
  }
}

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

            <div>
              <Card>
                <CardHeader
                 title="Username"
                 subtitle="Subtitle"
                 avatar={tilesData[0].img}
                 actAsExpander={true}
                 style={{ margin: '-20px 0px' }}
                />
                <CardText >
                  <p>"{this.props.review.content}"</p>
                  <div className="row">
                    <Chip
                      backgroundColor={'#B2EBF2'}
                      style={styles.chip}
                    >
                      <Avatar size={32} color={'#E0F7FA'} backgroundColor={'#00BCD4'}>
                        {this.props.review.stability}
                      </Avatar>
                      Comfort
                    </Chip>
                    <Chip
                      backgroundColor={'#B2EBF2'}
                      style={styles.chip}
                    >
                      <Avatar size={32} color={'#E0F7FA'} backgroundColor={'#00BCD4'}>
                        {this.props.review.aesthetics}
                      </Avatar>
                      Aesthetics
                    </Chip>
                    <Chip
                      backgroundColor={'#B2EBF2'}
                      style={styles.chip}
                    >
                      <Avatar size={32} color={'#E0F7FA'} backgroundColor={'#00BCD4'}>
                        {this.props.review.safety}
                      </Avatar>
                      Safety
                    </Chip>
                    <button
                      onClick={this.handleClick.bind(this)}
                    >Like
                    </button>
                    <p>Like Counter: {this.state.like}</p>
                  </div>
                </CardText>
              </Card>
            </div>
      );

  }
}
