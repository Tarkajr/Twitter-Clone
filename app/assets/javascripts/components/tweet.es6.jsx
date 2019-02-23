class Tweet extends React.Component {
  render(){
    let { avatar_url, handle, username, content, created_at } = this.props.data;

    return (
      <li className="tweet">
        <img className="avatar" src={avatar_url} alt=""/>
        <div className="tweet-content">
          <p>
            <span className="full-name">{handle}</span>
            <span className="username">{username}</span>
            <span className="timestamp">{created_at}</span>
          </p>
          <p>{content}</p>
        </div>
      </li>
    )
  }
}
