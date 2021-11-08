
function LightSwitchButton(props) {
  const { light, switchLight } = props;
  const handleClick = () => switchLight();


  return (
    <button onClick={ handleClick } className="LightSwitchButton">
      {props.light === "on" && <span><i>💡</i> I'm on!</span>}
      {props.light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
};


export default LightSwitchButton;