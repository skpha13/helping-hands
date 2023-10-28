import FeedCard from "../components/feed_card.component";
import logo1024 from "../assets/logo/logo-png-1024.png";
import FilterOng from "../components/filters_ong.component";

const Feed = () => {
  const categories = [
    {
      name: "Carti",
      quantity: 2,
    },
    {
      name: "Haine",
      quantity: 3,
    },
    {
      name: "Mobila",
      quantity: 4,
    },
  ];

  return (
    <div>
      <FilterOng />

      <div className="m-8">
        {categories.map((category, index) => (
          <FeedCard
            key={index}
            name="Un strop de fericire"
            img={logo1024}
            category={category}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nisl, quis ultricies nisl nisl quis nisl."
          />
        ))}

        {/* <FeedCard
          name="Un strop de fericire"
          img={logo1024}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nisl, quis ultricies nisl nisl quis nisl."
          categories={categories[0]}
        />

        <FeedCard
          name="Un strop de fericire"
          img={logo1024}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nisl, quis ultricies nisl nisl quis nisl."
          categories={categories[1]}
        />

        <FeedCard
          name="Un strop de fericire"
          img={logo1024}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nisl, quis ultricies nisl nisl quis nisl."
          categories={categories[2]}
        /> */}
      </div>
    </div>
  );
};

export default Feed;
