import  getButtonStyling  from "./getButtonStyling.js";

const Button = ({text, onClickHandler,styleType,type="Button"}) => {
  return (
    <button
        onClick = {onClickHandler}
        type = {type}
        // style = {{backgroundColor : "blue", color:"white"}}
        className = {`px-[17px] py-2 ${getButtonStyling(styleType)}`}
        >
        {/* {props.text} */ text} 
    </button>
  );
};



export default Button;


