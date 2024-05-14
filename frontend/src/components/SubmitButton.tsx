import "./styles/submitButton.css";
type propsType = {
  onClick: () => void;
};
export const SubmitButton = ({ onClick }: propsType) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      id="login-button"
      className="w-full h-[48px] bg-[#0166FF] text-white rounded-2xl"
    >
      Log In
    </button>
  );
};
