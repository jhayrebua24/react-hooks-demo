import logo from "./logo.svg";
import "./App.css";
import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import Form from "./components/Form";
import { usePosts, usePostsWithReducer } from "./components/hooks";

const initialValues = {
  firstName: "",
  lastName: "",
  age: "",
};

function App() {
  const [counter, setCounter] = useState(0);
  const [form, setForm] = useState(initialValues);
  const [posts, isLoading] = usePosts();
  usePostsWithReducer();

  const buttonRef = useRef();

  const disableButtonWithMemo = useMemo(
    () => Object.keys(form).some((key) => !form[key]),
    [form]
  );

  const disableButton = Object.keys(form).some((key) => !form[key]);

  const onChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  // // component did mount
  // useEffect(() => {
  // const fetchData = async () => {
  //   const { data } = await axios.get(
  //     `https://jsonplaceholder.typicode.com/posts`
  //   );
  //   setPosts(data);
  // };
  // fetchData();
  // }, [form]);
  console.log(counter);
  return (
    <div className="App">
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        posts.map((post) => <p>{post.title}</p>)
      )}
      {/* <Form /> */}
    </div>
  );
}

export default App;
