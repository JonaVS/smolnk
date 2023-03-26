
export const ButtonVariant = {
  default: 'p-3 text-gray-50 bg-purple-600 rounded-lg',
  formPrimary: "px-3 text-gray-50 font-bold bg-purple-600 rounded-r-xl drop-shadow-2xl transition-opacity duration-200 ease-in-out hover:opacity-75 disabled:opacity-50 disabled:pointer-events-none",
} as const

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:  keyof typeof ButtonVariant
};

const Button = ({variant = "default", className="", ...props}:Props) => {
  return (
    <button
    {...props}
      className={`${ButtonVariant[variant]}${className && ` ${className}`}`}
    >
      {props.children}
    </button>
  );
};

export default Button;