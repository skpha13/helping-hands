import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonPrimary = ({ name, icon, onHelpClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onHelpClick();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-highlight rounded-lg p-2 min-w-[96px] max-w-[256px] ml-10"
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ color: "#40514E" }}
        className="mr-2"
      />
      {name}
    </button>
  );
};

ButtonPrimary.defaultProps = {
  name: "Buton",
  icon: "fa-solid fa-plus",
  onHelpClick: () => {},
};

export default ButtonPrimary;
