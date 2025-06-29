
const TextInputFormContainer = () => {

    let inputType = "password";

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log("Form submitted");
    }

    const handleTextInputChange = (e) => {
        console.log("Text Changed");
        console.log(e.target.value);
    }

    const handleShowHideClick = () =>{
        if(inputType === "password"){
            inputType = "text"
        }else{
            inputType = "password"
        }
    }

  return (
    <TextInputForm 
    inputType = {inputType}
    handleFormSubmit = {handleFormSubmit}
    handleTextInputChange = {handleTextInputChange}
    handleShowHideClick = {handleShowHideClick}
    />
  )
};

export default TextInputFormContainer;
