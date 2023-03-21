import { HTMLProps } from "react"

type Props = HTMLProps<HTMLDivElement>
  

const MainSectionWrapper = ({ children, ...props }: Props) => {
  return (
    <section className="m-auto w-full md:w-3/4 max-w-7xl" {...props}>{children}</section>
  );
};

export default MainSectionWrapper;