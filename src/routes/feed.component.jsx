import FeedCard from "../components/feed_card.component";
import logo1024 from "../assets/logo/logo-png-1024.png";

const Feed = () => {
  return (
    <div>
      <FeedCard
        name="Un strop de fericire"
        img={logo1024}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nisl, quis ultricies nisl nisl quis nisl."
      />
    </div>
  );
};

export default Feed;
