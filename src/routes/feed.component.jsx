import FeedCard from "../components/feed_card.component";
import logo1024 from "../assets/logo/logo-png-1024.png";
import FilterOng from "../components/filters_ong.component";
import { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [arePostsLoaded, setPostsLoaded] = useState(false);

  const getAllPosts = async () => {
    try {
      const response = await axios.get("https://localhost:7272/api/Post/posts");
      return response.data.data;
    } catch (error) {
      if (error.response.data.status !== 200) {
        console.log(error.response.data.message);
      }
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
      setPostsLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <div>
      <FilterOng />

      <div className="m-8">
        {arePostsLoaded &&
          posts.map((post, index) => (
            <FeedCard
              key={index}
              name={post.title}
              img={logo1024}
              category={post.needs}
              text={post.description}
              canHelp={true}
            />
          ))}
      </div>
    </div>
  );
};

export default Feed;
