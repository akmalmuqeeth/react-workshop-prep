import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var TitleFactory = React.createFactory(MyTitle);

var div = React.DOM.div;


var mainComponent = React.createClass({
	render : function(){
		return (
			<div>
				<TitleFactory title="one" color="red"/>
				<TitleFactory title="two" color="yellow"/>
				<TitleFactory title="three" color="blue"/>
			</div>
		)
	}
})

var mainCompElement = React.createElement(mainComponent);
ReactDOM.render(mainCompElement, document.getElementById('app'))