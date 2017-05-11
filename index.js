var div = React.DOM.div;
var h1 = React.DOM.h1;

var titleComponent = React.createClass({
	render : function(){
		return (
			div(null,
				h1(null, "This is my second component")
			)
		)
	}
});


var mainComponent = React.createClass({
	render : function(){
		return (
			div(null, React.createElement(titleComponent), React.createElement(titleComponent), React.createElement(titleComponent))
		)
	}
})

var mainCompElement = React.createElement(mainComponent);
ReactDOM.render(mainCompElement, document.getElementById('app'))
