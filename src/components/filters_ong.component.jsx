import ButtonPrimary from "../components/button_primary.component";

const FilterOng = () => {
  return (
    <div className="bg-ui-primary border-2 border-accent rounded-lg m-4 p-2 text-lg">
      <div className="flex flex-row items-center justify-evenly">
        <h1 className="text-xl bg-ui-background w-fit rounded-lg p-2">
          Filtreaza dupa
        </h1>

        <div>
          <label className="mr-2">Categorie</label>
          <select className="rounded-xl bg-ui-background p-2">
            <option value="1">Carti</option>
            <option value="2">Haine</option>
            <option value="3">Mobila</option>
          </select>
        </div>

        <div>
          <label className="mr-2">Judet</label>
          <select className="rounded-xl bg-ui-background p-2">
            <option value="1">Bucuresti</option>
            <option value="2">Ploiesti</option>
            <option value="3">Brasov</option>
          </select>
        </div>

        <ButtonPrimary name={"Cauta"} icon="fa-solid fa-magnifying-glass" />
      </div>
    </div>
  );
};

export default FilterOng;
