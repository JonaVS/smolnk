import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type Props = { children: React.ReactNode };

const Layout = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col grow overflow-x-hidden pt-16 pb-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
