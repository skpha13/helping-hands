import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Need = ({ name, quantity }) => {
  return (
    <div className="flex flex-row items-center m-2">
      <FontAwesomeIcon
        icon="fa-solid fa-circle"
        style={{ color: "#11999e" }}
        className="max-w-[8px] mr-2"
      />
      <p className="mr-2 text-base">{name + ": "}</p>
      <p className="text-base">{quantity}</p>
    </div>
  );
};

export default Need;
