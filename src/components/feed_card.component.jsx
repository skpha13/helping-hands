import Need from "./needsItem.component";
import ButtonPrimary from "./button_primary.component";
import { useState } from "react";
import Information from "./information.component";

const FeedCard = ({ name, img, text, category, canHelp }) => {
  name = name || "Nume";
  img = img || "";
  text = text || "Descriere";
  category = category || { name: "Obiect", quantity: 0 };

  const [showInfo, setShowInfo] = useState(false);

  const onHelpClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="bg-ui-background p-4 m-8 rounded-lg">
      {/* div for flex to center elements */}
      <div className=" flex flex-col items-center w-full justify-between">
        <h1 className="text-2xl">{name}</h1>
        <img
          src={img}
          className="max-w-sm mt-2 border-t-2 border-accent"
          alt="Imagine"
        />
        <p className="text-base ml-10 mr-10 border-t-2 border-b-2 border-accent mb-2">
          {text}
        </p>
        <h1 className="text-xl">Cum poti ajuta?</h1>
      </div>

      <p className="ml-10 mr-10 text-base">Avem nevoie de:</p>
      <div className="flex flex-col justify-between ml-10 mr-10">
        <Need name={category.name} quantity={category.quantity}></Need>
      </div>

      {canHelp && (
        <div>
          <ButtonPrimary
            name="Ajuta"
            icon="fa-solid fa-plus"
            onHelpClick={onHelpClick}
          />

          {showInfo && <Information />}
        </div>
      )}
    </div>
  );
};

export default FeedCard;
