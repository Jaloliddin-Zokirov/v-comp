import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
