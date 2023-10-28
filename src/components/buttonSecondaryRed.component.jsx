import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonPrimary = ({ name, icon, onHelpClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onHelpClick();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-ui-background rounded-lg p-2 min-w-[96px] ml-10"
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ color: "#FF0000" }}
        className="mr-2"
      />
      {name}
    </button>
  );
};

ButtonPrimary.defaultProps = {
  name: "Buton",
  icon: "fa-solid fa-x",
  onHelpClick: () => {},
};

export default ButtonPrimary;
