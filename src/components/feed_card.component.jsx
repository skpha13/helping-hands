import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Need from "./needsItem.component";

const FeedCard = ({ name, img, text }) => {
  return (
    <div className="bg-ui-background p-2 m-2 rounded-lg">
      {/* div for flex to center elements */}
      <div className=" flex flex-col items-center w-full justify-between">
        <h1 className="text-xl">{name}</h1>
        <img
          src={img}
          className="max-w-sm mt-2 border-t-2 border-accent"
          alt="Imagine"
        />
        <p className="ml-10 mr-10 border-t-2 border-b-2 border-accent mb-2">
          {text}
        </p>
        <h1 className="text-xl">Cum poti ajuta?</h1>
      </div>

      <p className="ml-10 mr-10">Avem nevoie de:</p>
      <div className="flex flex-col justify-between ml-10 mr-10">
        <Need name="Masa" quantity={3}></Need>
      </div>

      <button className="bg-highlight rounded-lg p-2 min-w-[96px] ml-10">
        <FontAwesomeIcon
          icon="fa-solid fa-plus"
          style={{ color: "#40514E" }}
          className="mr-2"
        />
        Ajuta
      </button>
    </div>
  );
};

export default FeedCard;
