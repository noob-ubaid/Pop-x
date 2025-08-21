import React from "react";

const InputField = ({ text, type, placeholder, required, name }) => {
  return (
    <fieldset className="border border-gray-300 rounded-md px-3  focus-within:border-purple-600">
      <legend className="text-[13px] text-[#6C25FF] px-3">
        {text} {required && <span className="text-red-500">*</span>}
      </legend>
      <input
        className="w-full  py-1 outline-none  mb-2 placeholder-gray-400"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </fieldset>
  );
};

export default InputField;
