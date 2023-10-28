import FeedCard from "./feed_card.component";
import logo1024 from "../assets/logo/logo-png-1024.png";
import ButtonPrimary from "./button_primary.component";
import ButtonSecondaryRed from "./buttonSecondaryRed.component";

const CurrentPosts = () => {
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
    <>
      <div className="m-8">
        {categories.map((category, index) => (
          <>
            <FeedCard
              key={index}
              name="Un strop de fericire"
              img={logo1024}
              category={category}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultricies ultricies, nunc nisl ultricies nisl, quis ultricies nisl nisl quis nisl."
              canHelp={false}
            />
            {/* edit and delete for post */}
            <div className="flex flex-row justify-center items-center">
              <ButtonPrimary name="Editeaza" icon="fa-solid fa-pen-to-square" />
              <ButtonSecondaryRed name="Sterge" />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CurrentPosts;
