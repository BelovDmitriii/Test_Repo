import axios from 'axios';
import { useEffect, useState } from 'react';

function Reddit() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then (res => {
      const newPost = res.data.data.children.map(obj => obj.data);
      setPost(newPost);
    });
  },[]);

  return(
    <div>
      <h1>r/reactjs</h1>
      <ul>
        {posts.map(post => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </div>
  );
}

export default Reddit;