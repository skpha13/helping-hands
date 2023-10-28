import { useState } from "react";
import ButtonPrimary from "./button_primary.component";

const NewPost = () => {
  const [carti, setCarti] = useState(0);
  const [haine, setHaine] = useState(0);
  const [mobila, setMobila] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCartiChange = (event) => {
    setCarti(event.target.value);
  };

  const handleHaineChange = (event) => {
    setHaine(event.target.value);
  };

  const handleMobilaChange = (event) => {
    setMobila(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="m-10 text-lg bg-ui-background rounded-lg p-2">
      <form id="form-data" className="flex flex-col ">
        <div className="flex flex-row justify-between m-2 items-center">
          <label>Titlu: </label>
          <input
            onChange={handleTitleChange}
            type="text"
            value={title}
            placeholder=" titlu "
            className="border-2 border-ui-primary outline-none bg-ui-background m-2 rounded-lg p-1 focus:border-2 focus:border-accent max-w-[256px]"
          ></input>
        </div>

        <div className="flex flex-row text-lg justify-between m-2 items-center">
          <label>Descriere: </label>
          <input
            onChange={handleDescriptionChange}
            type="text"
            value={description}
            placeholder=" descriere "
            className="border-2 border-ui-primary outline-none bg-ui-background m-2 rounded-lg p-1 focus:border-2 focus:border-accent max-w-[256px]"
          ></input>
        </div>

        <h1 className="m-2">Necesitati: </h1>
        <div className="flex flex-row text-lg justify-between items-center m-2">
          <label className="text-lg"> Carti </label>
          <input
            onChange={handleCartiChange}
            type="number"
            value={carti}
            placeholder="0"
            className="border-2 border-ui-primary outline-none bg-ui-background m-2 rounded-lg p-1 focus:border-2 focus:border-accent max-w-[256px]"
          />
        </div>
        <div className="flex flex-row text-lg justify-between items-center m-2">
          <label className="text-lg"> Haine </label>
          <input
            onChange={handleHaineChange}
            type="number"
            value={haine}
            placeholder="0"
            className="border-2 border-ui-primary outline-none bg-ui-background m-2 rounded-lg p-1 focus:border-2 focus:border-accent max-w-[256px]"
          />
        </div>
        <div className="flex flex-row text-lg justify-between items-center m-2">
          <label className="text-lg"> Mobila </label>
          <input
            onChange={handleMobilaChange}
            type="number"
            value={mobila}
            placeholder="0"
            className="border-2 border-ui-primary outline-none bg-ui-background m-2 rounded-lg p-1 focus:border-2 focus:border-accent max-w-[256px]"
          />
        </div>

        <div className="m-0 m-auto mt-4 mb-4">
          <ButtonPrimary name="Adauga Postare" />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
