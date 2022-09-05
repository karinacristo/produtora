import { lazy, Suspense } from "react";
import { GlobalStyle } from "./globalStyles";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));


function App() {
  return (
  <>
    <Suspense fallback={null}>
    <GlobalStyle/>

    <Header/>
    <Home/>
    <Footer/>
    </Suspense>
  </>
  );
}

export default App;
