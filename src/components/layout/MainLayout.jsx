import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function MainLayout() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <div className="container center-content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
