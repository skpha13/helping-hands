import ButtonPrimary from "../components/button_primary.component";

const FilterOng = ({ counties, helperFunction }) => {
  const sendData = () => {
    const categoryValue = document.getElementById("category").value;
    const countyValue = document.getElementById("county").value;
    helperFunction(categoryValue, countyValue);
  };

  return (
    <div className="bg-ui-primary rounded-lg m-4 p-2 text-lg">
      <div className="flex flex-row items-center justify-evenly">
        <h1 className="text-xl bg-ui-background w-fit rounded-lg p-2">
          Filtreaza dupa
        </h1>

        <div>
          <label className="mr-2">Categorie</label>
          <select id="category" className="rounded-xl bg-ui-background p-2">
            <option value="">Toate</option>
            <option value="carti">Carti</option>
            <option value="haine">Haine</option>
            <option value="mobila">Mobila</option>
            <option value="lemn">Lemn</option>
          </select>
        </div>

        <div>
          <label className="mr-2">Judet</label>
          <select id="county" className="rounded-xl bg-ui-background p-2">
            <option value="">Toate</option>
            {counties.map((county, index) => (
              <option key={index} value={county}>
                {county}
              </option>
            ))}
          </select>
        </div>

        <ButtonPrimary
          onClick={sendData}
          name={"Cauta"}
          icon="fa-solid fa-magnifying-glass"
          onHelpClick={sendData}
        />
      </div>
    </div>
  );
};

export default FilterOng;
