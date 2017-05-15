
var Comment = React.createClass({
	render : function () {
		return (
			<li className="list-group-item">
				<div className  ="row">
					<div className  ="col-xs-2 col-md-1">
						<img src="http://placehold.it/80" className  ="img-circle img-responsive" alt="" /></div>
					<div className  ="col-xs-10 col-md-11">
						<div>
							<a href="http://www.jquery2dotnet.com/2013/10/google-style-login-page-desing-usign.html">
								{this.props.title}</a>
							<div className  ="mic-info">
								By: <a href="#">{this.props.author}</a> on {this.props.date}
							</div>
						</div>
						<div className  ="comment-text">
							{this.props.comment}
						</div>
						<div className  ="action">
							<button type="button" className  ="btn btn-primary btn-xs" title="Edit">
								<span className  ="glyphicon glyphicon-pencil"></span>
							</button>
							<button type="button" className  ="btn btn-success btn-xs" title="Approved">
								<span className  ="glyphicon glyphicon-ok"></span>
							</button>
							<button type="button" className  ="btn btn-danger btn-xs" title="Delete">
								<span className  ="glyphicon glyphicon-trash"></span>
							</button>
						</div>
					</div>
				</div>
			</li>
		)
	}
})

var CommentsBox = React.createClass({

	getInitialState : function(){
	    return {
	    	comments : [
				{title : 'First Comment' , author : 'Jane Doe' , date : 'April 5th 2017', comment: 'react works well.'},
				{title : 'Second Comment' , author : 'Albert Pinto' , date : 'April 15th 2017' , comment: 'JSX rocks'},
				{title : 'Third Comment' , author : 'Fred D' , date : 'April 25th 2017' , comment: 'yeah watever'}
			]
		}
	},

	handleSubmit : function(event){
		event.preventDefault();
		let newCommentText = this.comment.value;

		let newComment = {title : 'Default comment' , author : 'New author' , date : 'April 25th 2017' , comment:newCommentText};

		let newComments = this.state.comments.concat(newComment)

		this.setState({comments: newComments});
	},

	render : function () {

		let commentNodes = this.state.comments.map(function(comment){
			return <Comment title={comment.title} author={comment.author} date={comment.date} comment={comment.comment}/>
		});


		return (
			<div>
				<h3>Comments:</h3>
				<div>
					<h5>Add Comment</h5>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<textarea ref={ (input) => {this.comment = input} } name="commenTextArea" id="commentText" cols="30" rows="10"></textarea>
						<button type="submit">Add Comment</button>
					</form>
				</div>
				<ul>
					{commentNodes}
				</ul>
			</div>
		)
	}
})

ReactDOM.render(<CommentsBox/>, document.getElementById('app'))