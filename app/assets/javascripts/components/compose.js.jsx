class Compose extends React.Component {

	handleSubmit(event){
		event.preventDefault();
		let tweetForm = this.refs['tweet-form']
		$.ajax({
			url: '/tweets',
			method: 'post',
			data: {
				tweet: {
					content: tweetForm.value
				}
			}
		}).done(function(response){
		})
	}

	render(){
		return(
		<section id="tweet-box">
   		 <p id="tweet-box-title">Compose New Tweet</p>
    		<form id="tweet-form" onSubmit={this.handleSubmit.bind(this)}>
     		<textarea ref="tweet-form" id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet"></textarea>
      		<input type="submit" value="Tweet"/>
  		 	</form>
  		</section>
  	)
	}
}
