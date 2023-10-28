import { useState } from "react";
import ButtonPrimary from "./button_primary.component";

const Information = () => {
  const [numberValue, setNumberValue] = useState(0);

  const handleNumberChange = (event) => {
    setNumberValue(event.target.value);
  };

  return (
    <div className="flex flex-row m-4 ml-10 mr-10 items-center justify-between bg-ui-primary p-4 rounded-lg">
      <h1 className="text-xl">Spune-ne cu cat poti sa ajuti:</h1>
      {/* div for form */}
      <div>
        <label className="text-lg mr-2">Cantitate:</label>
        <input
          type="number"
          value={numberValue}
          min={0}
          onChange={handleNumberChange}
          className="border-2 border-ui-primary outline-none bg-ui-background m-2 rounded-lg p-1 focus:border-2 focus:border-accent max-w-[64px]"
        />
      </div>
      <ButtonPrimary name="Submit" icon="fa-solid fa-plus" />
    </div>
  );
};

export default Information;
