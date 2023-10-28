import FeedCard from "../components/feed_card.component";
import logo1024 from "../assets/logo/logo-png-1024.png";
import FilterOng from "../components/filters_ong.component";
import { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [arePostsLoaded, setPostsLoaded] = useState(false);
  const [counties, setCounties] = useState([]);
  const [areCountiesLoaded, setCountiesLoaded] = useState(false);

  const getAllPosts = async () => {
    try {
      const response = await axios.get("https://localhost:7272/api/Post/posts");
      return response.data.data.$values;
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

  const getAllCounties = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7272/api/Post/counties"
      );
      return response.data.$values;
    } catch (error) {
      console.log(error);
      if (error.response.data.status !== 200) {
        console.log(error.response.data.message);
      }
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const counties = await getAllCounties();
      setCounties(counties);
      setCountiesLoaded(true);
    };

    fetchData();
  }, []);

  const filterPosts = (category, county) => {
    if (arePostsLoaded) {
      const filteredPosts = posts.filter((post) => {
        console.log(post.needs.$values, post.county, county);
        if (category && county) {
          return (
            post.needs.$values.includes(category) &&
            post.county.toLowerCase() === county.toLowerCase()
          );
        } else if (category) {
          return post.needs.$values.includes(category.toLowerCase());
        } else if (county) {
          return post.county.toLowerCase() === county.toLowerCase();
        } else {
          return true;
        }
      });
      setPosts(filteredPosts);
    }
  };

  return (
    <div>
      {areCountiesLoaded && (
        <FilterOng counties={counties} helperFunction={filterPosts} />
      )}

      <div className="m-8">
        {arePostsLoaded &&
          posts.map((post, index) => (
            <FeedCard
              key={index}
              name={post.title}
              img={logo1024}
              category={post.needs.$values}
              text={post.description}
              canHelp={true}
            />
          ))}
      </div>
    </div>
  );
};

export default Feed;
