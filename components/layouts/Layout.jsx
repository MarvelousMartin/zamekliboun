import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";

export const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
