import { motion, HTMLMotionProps } from "framer-motion";

export const ButtonVariant = {
  default: 'p-3 text-gray-50 bg-purple-600 rounded-lg',
  formPrimary: "px-3 text-gray-50 font-bold bg-purple-600 rounded-r-xl drop-shadow-2xl disabled:opacity-50 disabled:pointer-events-none",
} as const

type Props = HTMLMotionProps<'button'> & {
  variant?:  keyof typeof ButtonVariant
};

const Button = ({ variant = "default", className = "", ...props }: Props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      {...props}
      className={`${ButtonVariant[variant]}${className && ` ${className}`}`}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;