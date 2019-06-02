import { getPosts } from "@/services/post_api";

export const loadPostsAction =()=>{
  return async dispath => {
    const res = await getPosts();
    dispath({
      type: "LOAD_POST",
      payload: res.data
    });
  };

}

export const getProData = () => {

  return async dispatch => {
    
  }
}