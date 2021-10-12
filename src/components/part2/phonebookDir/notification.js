const Notification = ({ successMessage, errorMessage }) => {
  if (successMessage == null && errorMessage == null) {
    return null;
  }

  return (
    <div className={`${successMessage ? "success" : "error"} `}>
      {successMessage ? successMessage : errorMessage}
    </div>
  );
};

export default Notification;
