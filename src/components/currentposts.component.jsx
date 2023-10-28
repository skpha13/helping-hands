import FeedCard from "./feed_card.component";
import logo1024 from "../assets/logo/logo-png-1024.png";
import ButtonPrimary from "./button_primary.component";
import ButtonSecondaryRed from "./buttonSecondaryRed.component";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../assets/burnt_house.jpg";
import img2 from "../assets/casa_de_copii.jpg";

const CurrentPosts = () => {
  const [posts, setPosts] = useState([]);
  const [arePostsLoaded, setPostsLoaded] = useState(false);

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

  const deletePost = async (index) => {
    try {
      console.log(posts[index].id);
      const response = await axios.delete(
        "https://localhost:7272/api/Post/delete?id=" + posts[index].id
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="m-8">
        {arePostsLoaded &&
          posts.map((post, index) => (
            <>
              <FeedCard
                key={index}
                name={post.title}
                img={index === 0 ? img1 : index === 1 ? img2 : logo1024}
                category={post.needs.$values}
                text={post.description}
                canHelp={false}
              />
              {/* edit and delete for post */}
              <div className="flex flex-row justify-center items-center">
                <ButtonPrimary
                  name="Editeaza"
                  icon="fa-solid fa-pen-to-square"
                />
                <ButtonSecondaryRed
                  onHelpClick={() => {
                    deletePost(index);
                  }}
                  name="Sterge"
                />
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default CurrentPosts;
