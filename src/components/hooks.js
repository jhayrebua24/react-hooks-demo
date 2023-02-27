import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { actionSetLoading, actionSetPostList } from "./actions";
import { FormContext } from "./Form";
import { PostReducer } from "./reducer";

export const useFormContext = () => useContext(FormContext);

export const usePosts = () => {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [posts, isLoading];
};

const initialValues = {
  list: [],
  isLoading: false,
};

export const usePostsWithReducer = () => {
  const [posts, dispatch] = useReducer(PostReducer, initialValues);
  console.log(posts, "postsValue");
  useEffect(() => {
    const fetchData = async () => {
      dispatch(actionSetLoading(true));
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        dispatch(actionSetPostList(data));
      } catch (e) {
        console.log(e);
      } finally {
        dispatch(actionSetLoading(false));
      }
    };
    fetchData();
  }, []);

  return posts;
};
