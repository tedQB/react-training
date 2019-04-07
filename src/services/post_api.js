import { get } from "axios";

export function getPosts() {
  return get("https://jsonplaceholder.typicode.com/posts");
}
