import { useState } from "react";
import CurrentPosts from "../components/currentposts.component";
import NewPost from "../components/newpost.component";

const Dashboard = () => {
  const [currentPosts, setcurrentPosts] = useState(true);
  const [newPost, setNewPost] = useState(false);

  const showCurrentPosts = () => {
    setcurrentPosts(true);
    setNewPost(false);
  };

  const showCreatePosts = () => {
    setcurrentPosts(false);
    setNewPost(true);
  };

  return (
    <>
      <div className="m-2 p-2 border-b-2 border-accent">
        <label className="mr-2 text-lg">Postari</label>
        <select className="rounded-xl bg-ui-background p-2 text-lg">
          <option onClick={showCurrentPosts}>Curente</option>
          <option onClick={showCreatePosts}>Creeza postare noua</option>
        </select>
      </div>

      {currentPosts && <CurrentPosts />}
      {newPost && <NewPost />}
    </>
  );
};

export default Dashboard;
