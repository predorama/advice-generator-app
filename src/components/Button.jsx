const Button = (props) => {
  return (
    <div className='btn'>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
};
export default Button;
