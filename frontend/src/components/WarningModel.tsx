import "./styles/submitButton.css";

const WarningModal: React.FC = () => {
  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h2 className="text-2xl text-red-800">Warning</h2>
        <p>You have not logged in yet</p>
        <button
          className="w-[384px] h-[48px] bg-[#0166FF] text-white rounded-2xl"
          id="login-button"
        >
          <a href="/Login">Back To Login</a>
        </button>
      </div>
    </div>
  );
};

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
};

export default WarningModal;
