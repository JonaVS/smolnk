import React from "react";

type Props = React.ComponentPropsWithRef<"input"> & {
  label: string;
  labelClassName?: string
};

const TextInput = ({ label, labelClassName, id, ...props }: Props) => {
  return (
    <>
      <label htmlFor={id} className={labelClassName}>{label}</label>
      <input
        id={id}
        type="text"
        className="max-w-sm md:max-w-lg w-full h-14 px-3 bg-gray-50 text-gray-500 font-medium rounded-l-xl rounded-r-none 
          drop-shadow-lg focus:outline-none focus:bg-slate-100 transition-colors"
        {...props}
      />
    </>
  );
};

export default TextInput;
