const Button = (props) => {
  return (
    <button className="button1" onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
