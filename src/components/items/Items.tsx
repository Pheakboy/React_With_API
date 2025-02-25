import { useEffect, useState } from "react";
// import ModalForm from "./ModalForm";

type PostType = {
  id: number;
  title: string;
  body: string;
};

const URL = "https://jsonplaceholder.typicode.com/posts";

const Items = () => {
  const [post, setPost] = useState<PostType[]>([]);
  useEffect(() => {
    fetchPost();
  }, []);

  // Fetch all Post Data
  const fetchPost = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setPost(data);
    // console.log(data);
  };

  // Delete Post
  const handelDeletePost = (id: number) => {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then(() => {
      const newPost = post.filter((postItem) => postItem.id !== id);
      setPost(newPost);
      // console.log(newPost);
    });
  };

  // edit Post
  const handelEditPost = (id: number) => {
    fetch(`${URL}/${id}`, {
      method: "PUT",
      // body: JSON.stringify({title: "new title", body: "new body"}),
    }).then(() => {
      const newPost = post.map((postItem) => {
        if (postItem.id === id) {
          return {
            ...postItem,
            title: "new title",
            body: "new body",
          };
        }
        return postItem;
      });
      setPost(newPost);
    });
  };

  // create Post
  const handelCreatePost = () => {
    fetch(URL, {
      method: "POST",
      // body: JSON.stringify({title: "new title", body: "new body"}),
    }).then(() => {
      const newPost = [
        { id: post.length + 1, title: "new title", body: "new body" },
        ...post,
      ];
      setPost(newPost);
    });
  };

  return (
    <div className="container mx-auto max-w-5xl p-6 space-y-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Post : {post.length}
      </h1>
      {post.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <button
              onClick={handelCreatePost}
              className="bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 transition duration-300"
            >
              Create
            </button>
            <button
              onClick={() => handelDeletePost(item.id)}
              className="bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700 transition duration-300"
            >
              Delete
            </button>
            <button
              onClick={() => handelEditPost(item.id)}
              className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300"
            >
              Edit
            </button>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-4 md:mt-0">
            {item.title}
          </h2>
          <p className="text-gray-600">{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
