import React, { Component } from 'react'

export default class ChatItem extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     odd: true
  //   }
  // }

  formatChat = (chat) => {
    let tokenized = chat.split(' ')
    tokenized.map( token => {
      if (token.includes('boop')) {
        return token.toUpperCase()
      } else {
        return token
      }
    })
    return tokenized.join(' ')
  }

  render() {

    const { chat } = this.props

    return (
      <div style={{ color: this.props.idx % 2 == 0 ? 'orange' : 'purple' }}>
        {this.formatChat(chat)}
      </div>
    )
  }

}
