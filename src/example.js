import React from "react";
import Immutable from "immutable";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostList from "./components/post_list";
function BasicExample() {
  /*
  let a2 = Immutable.fromJS({
    b: 1,
    c: {
      c1: 123
    }
  });
  let b2 = a2.set("b", 2);
  console.log(a2 === b2);
  console.log(a2.b === b2.b);
  console.log(a2.get("c") === b2.get("c"));
  console.log("==========");
  let a1 = {
    b: 1,
    c: {
      c1: 123
    }
  };
  let b1 = a1;
  b1.b = 2;
  console.log(a1 === b1);
  console.log(a1.b === b1.b);
  console.log(a1.c === b1.c);
  */

  return (
    <div>
      <PostList />
      <p>redux</p>
    </div>
  );
}
export default BasicExample;
