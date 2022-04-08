import React, { Component } from "react";
import PubSub from 'pubsub-js'
import "./index.css";

class index extends Component {
  // 初始化状态
  state ={ 
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('updateListState', (msg,data) => {
      debugger
      this.setState(data)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>enter git name</h2>
        ) : isLoading ? (
          <h2>loading...</h2>
        ) : err ? (
          <h2>{err}</h2>
        ) : (
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img
                    alt="headImg"
                    src={user.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default index;
