import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var titleFactory = React.createFactory(MyTitle);

var div = React.DOM.div;


var mainComponent = React.createClass({
	render : function(){
		return (
			div(null,
				titleFactory({title : 'something more than just components', color : 'peru'}),
				titleFactory({title : 'title 2', color : 'mediumaquamarine'}),
				titleFactory({title : 'message from the factory', color : 'red'})
			)
		)
	}
})

var mainCompElement = React.createElement(mainComponent);
ReactDOM.render(mainCompElement, document.getElementById('app'))