import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type Props = { children: React.ReactNode };

const Layout = ({children}:Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
