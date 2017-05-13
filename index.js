import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var mainComponent = React.createClass({
	render : function(){
		return (
			<div>
				<MyTitle title="one" color="red"/>
				<MyTitle title="two" color="yellow"/>
				<MyTitle title="three" color="blue"/>
			</div>
		)
	}
})

var mainCompElement = React.createElement(mainComponent);
ReactDOM.render(mainCompElement, document.getElementById('app'))