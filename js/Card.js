import React from 'react'

var Card = React.createClass({
  propTypes: function () {
    return {
      name: React.PropTypes.object
    }
  },
  render: function () {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
  )
  }
})

export default Card
