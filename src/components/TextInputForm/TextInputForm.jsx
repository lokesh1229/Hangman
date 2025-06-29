import TextInput from "../TextInput/TextInput.jsx";
import Button from "../Button/Button.jsx";
import TextInputFormContainer from "./TextInputFormContainer.jsx"


const TextInputForm = (inputType, handleFormSubmit,handleTextInputChange,handleShowHideClick) => {


  return (
    <form onSubmit={handleFormSubmit} >
      <div>
        <TextInput 
          label="Enter a word"
          placeholder="Enter a word or phrase"
          onChangeHandler = {handleTextInputChange}
          inputType = {inputType}
        />
      </div>
      <div>
        <Button 
          styleType="warning"
          text="show/hide"
          onClickHandler = {handleShowHideClick}
          inputType = {inputType}
        />
      </div>
      <div>
        <Button 
          type="submit"
          styleType="primary"
          text="Submit"
        />
      </div>
    </form>
  );
};

export default TextInputForm;
