import { useEffect, useState } from "react";
import ButtonPrimary from "./button_primary.component";



const Information = ({necesitati, quantity}) => {
  let defaultHelpFields ={}
  necesitati.map(need => {
    defaultHelpFields[need] = 0;
  })
  const [helpFields, setHelpFields] = useState(defaultHelpFields);
  console.log(helpFields)

  const handleNumberChange= (event) => {
    const { name, value } = event.target;
    const number = parseInt(value);
    setHelpFields({ ...helpFields, [name]: number });
  };

  return (
    <div className="m-4 ml-10 mr-10 items-center justify-between bg-ui-primary p-4 rounded-lg">
      <h1 className="text-xl mb-4">Spune-ne cu cat poti sa ajuti:</h1>
      <div>
        {necesitati.map((need, index) => {
          return(
            <div key={index}>
              <label className="text-lg mr-2">{need}:</label>
              <input
                type="number"
                name={need}
                value={helpFields[need]}
                min={0}
                max={quantity[index]}
                onChange={handleNumberChange}
                className="border-2 border-ui-primary outline-none bg-ui-background m-2 rounded-lg p-1 focus:border-2 focus:border-accent max-w-[64px]"
              />
          </div>
          )
        })}
  
        
      </div>
      <div className="flex justify-center ">
      <ButtonPrimary name="Submit" icon="fa-solid fa-plus" />
      </div>
    </div>
  );
};

export default Information;
