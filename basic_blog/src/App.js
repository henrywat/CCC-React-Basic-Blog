import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const loadMore = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 5);
  };

  return (
    <div>
      <table class="w3-table-all w3-margin-top" id="blogTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
        {posts.slice(0, visiblePosts).map(post => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <button onClick={loadMore} id="loadMoreBtn" class="loadMoreBtn">Load More Posts</button>
    </div>
  );
};

export default App;
