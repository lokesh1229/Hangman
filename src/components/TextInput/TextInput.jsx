

const TextInput = ({type = "text", label, placeholder = "Enter your text here", onChangeHandler}) => {
    return (
        <label>
            {/* {label} */}
            <span className = "text-gray-700">
            </span>
            <input
                label = {label}
                className = "px-4 py-2 border-gray-500 rounded-md w-full"
                type = {type}
                onChange = {onChangeHandler}
                placeholder = {placeholder}

            >
            </input>
        </label>
    );
}

export default TextInput;