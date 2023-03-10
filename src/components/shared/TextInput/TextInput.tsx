import React from "react";

type props = React.ComponentPropsWithRef<"input"> & {
  label: string;
  labelClassName?: string
};

const TextInput = ({ label, labelClassName, id, ...props }: props) => {
  return (
    <>
      <label htmlFor={id} className={labelClassName}>{label}</label>
      <input id={id} type="text" {...props} />
    </>
  );
};

export default TextInput;
