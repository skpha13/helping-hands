import FeedCard from "../components/feed_card.component";
import logo1024 from "../assets/logo/logo-png-1024.png";
import FilterOng from "../components/filters_ong.component";

const Feed = () => {
  return (
    <div>
      <FilterOng />

      <div className="m-8">
        <FeedCard
          name="Un strop de fericire"
          img={logo1024}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nisl, quis ultricies nisl nisl quis nisl."
        />

        <FeedCard
          name="Un strop de fericire"
          img={logo1024}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nisl, quis ultricies nisl nisl quis nisl."
        />

        <FeedCard
          name="Un strop de fericire"
          img={logo1024}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nisl, quis ultricies nisl nisl quis nisl."
        />
      </div>
    </div>
  );
};

export default Feed;
