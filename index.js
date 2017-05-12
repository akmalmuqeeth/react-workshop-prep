var div = React.DOM.div;
var h1 = React.DOM.h1;

var titleComponent = React.createClass({
	render : function(){
		return (
			div(null,
				h1({style : {color : this.props.color}}, this.props.title)
			)
		)
	}
});

var titleFactory = React.createFactory(titleComponent);


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
