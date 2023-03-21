import React from "react";

type props = React.ComponentPropsWithRef<"input"> & {
  label: string;
  labelClassName?: string
};

const TextInput = ({ label, labelClassName, id, ...props }: props) => {
  return (
    <>
      <label htmlFor={id} className={labelClassName}>{label}</label>
      <input
        id={id}
        type="text"
        className="max-w-sm md:max-w-lg w-full h-14 px-3 bg-gray-50 text-gray-500 font-medium rounded-l-xl drop-shadow-lg focus:outline-none"
        {...props}
      />
    </>
  );
};

export default TextInput;
