class Timeline extends React.Component {
  constructor(){
    super();
    this.state = {
      tweets: []
    }
  }

  componentDidMount(){
    $.ajax({
      url: '/tweets/recent',
      type: 'get'
    }).done((response) => {
      this.setState({
        tweets: response
      })
    })
  }

  render(){
    let tweets = this.state.tweets;

    return(
 		  <section id="tweets-container">
 			  <h3>Tweets</h3>
 			  <ul>
          {tweets.map( (tweet, i) => <Tweet data = {tweet} key={i}/>)}
        </ul>
 			</section>
 		)
  }
}
