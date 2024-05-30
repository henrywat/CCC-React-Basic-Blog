import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);

  /**
  * Fetches data from the specified URL and sets the posts state.
  *
  * @return {Promise<void>} - A promise that resolves when the data is fetched and the posts state is set.
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Starting data fetch...');
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log('Data fetched successfully. Setting state...');
        setPosts(data);
        console.log('State set successfully.');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  /**
  * Increases the number of visible posts by 5.
  *
  * @return {void} No return value.
  */
  const loadMore = () => {
    console.log('Current visiblePosts:', visiblePosts);
    setVisiblePosts(prevVisiblePosts => {
      const newVisiblePosts = prevVisiblePosts + 5;
      console.log('New visiblePosts:', newVisiblePosts);
      return newVisiblePosts;
    });
  };

  return (
    <div>
      <table className="w3-table-all w3-hoverable w3-margin-top" id="blogTable">
        <thead>
          <tr className="w3-red">
            <th>#</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
        {posts.slice(0, visiblePosts).map(post => (
          <tr key={post.id} className="w3-hover-green">
            <td>{post.id}</td>
            <td>{post.title}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <button onClick={loadMore} id="loadMoreBtn" className="loadMoreBtn">Load More Posts</button>
    </div>
  );
};

export default App;
