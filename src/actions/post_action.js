import { getPosts } from "../services/post_api";

export const loadPostsAction = async dispath => {
  const res = await getPosts();
  dispath({
    type: "LOAD_POST",
    payload: res.data
  });
};
