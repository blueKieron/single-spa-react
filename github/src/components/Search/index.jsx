import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";
import * as commonService from '@kieron/commonService'

class index extends Component {
  search = () => {
    const {
      KeyValue: { value: KeyWord },
    } = this;
    PubSub.publish("updateListState", {
      isFirst: false,
      isLoading: true,
    });
    axios.get(`https://api.github.com/search/users?q=${KeyWord}`).then(
      (res) => {
        console.log(res.data);
        PubSub.publish("updateListState", { isLoading: false, users: res.data.items });
      },
      (err) => {
        PubSub.publish("updateListState", { isLoading: false, err: err.message });
      }
    );
  };
  render() {
    console.log(commonService)
    debugger
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          {/*使用ref拿到输入的数据，ref中使用回调函数的形式，在实例对象中创建一个KeyValue的属性，值是该节点*/}
          <input
            ref={(c) => (this.KeyValue = c)}
            type="text"
            placeholder="输入关键词进行搜索"
          />
          &nbsp;
          <commonService.Button onClick={() => this.search()}>搜索</commonService.Button>
          {/* <button onClick={this.search}>搜索</button> */}
        </div>
      </section>
    );
  }
}

export default index;
