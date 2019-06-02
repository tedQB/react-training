import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPostsAction } from "../store/testredux/actions/post_action";

import { countAddAction, countReduceAction } from "../store/testredux/actions/counter_action";

class PostList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //this.props.dispatch(loadPostsAction);
    //this.props.countAddAction();
    this.props.loadPostsAction();
    console.log("DidMount", this.props);
  }
  handleInput() {
    console.log("handleInput");
    //this.props.countAddAction();
    //this.props.loadPostsAction();
  }
  componentWillMount() {
    //console.log(this.props, "componentWillMount");
  }

  render() {
    const { list } = this.props.post;

    const posts = list.map(post => {
      return <li key={post.id}>{post.title}</li>;
    });
    return (
      <div>
        <button onClick={this.handleInput.bind(this)}>onClick</button>
        <ul>{posts}</ul>
      </div>
    );
  }
}
/*
const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    post: state.post,
    counter: state.counter
  };
};
*/

export default connect(
  state => ({
    post: state.post,
    counter: state.counter
  }),
  {
    loadPostsAction,
    countAddAction,
    countReduceAction
  }
)(PostList);

//通过connect连接组件和redux数据
