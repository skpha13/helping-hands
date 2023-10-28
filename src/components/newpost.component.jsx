import { useState } from "react";
import ButtonPrimary from "./button_primary.component";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [needtext, setNeedText] = useState("");
  const [needValue, setNeedValue] = useState(0);

  const handleNeedValueChange = (event) => {
    setNeedValue(event.target.value);
  };

  const handleNeedTextChange = (event) => {
    setNeedText(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="m-10 text-lg">
      <form
        id="form-data"
        className="flex flex-col bg-ui-background rounded-lg p-2"
      >
        <h1 className="text-2xl font-bold text-center">Postare</h1>
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

        <div className="m-0 m-auto mt-4 mb-4">
          <ButtonPrimary name="Adauga Postare" />
        </div>
      </form>

      <div className="flex flex-col bg-ui-background rounded-lg p-2 mt-10">
        <h1 className="text-2xl font-bold text-center">Necesitati</h1>
        <div className="flex flex-row text-lg justify-between items-center m-2">
          <input
            onChange={handleNeedTextChange}
            type="text"
            value={needtext}
            placeholder="obiect"
            className="border-2 border-ui-primary outline-none bg-ui-background m-2 rounded-lg p-1 focus:border-2 focus:border-accent max-w-[256px]"
          ></input>
          <input
            onChange={handleNeedValueChange}
            type="number"
            value={needValue}
            placeholder="0"
            className="border-2 border-ui-primary outline-none bg-ui-background m-2 rounded-lg p-1 focus:border-2 focus:border-accent max-w-[256px]"
          />
          <div className="m-0 m-auto mt-4 mb-4">
            <ButtonPrimary name="Adauga Necesitate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
