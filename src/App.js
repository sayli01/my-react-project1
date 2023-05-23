//React function
//SPL function :: understood by REACT
//return JSX (means its a react function)
//App tag is default-others can be called inside app()

import Header from "./pages/Header";
import MainBody from "./pages/MainBody";
import Footer from "./pages/Footer";

//return JSX
function App() {
  return (
    <div>
      <Header />
      <MainBody />
      <MainBody />
      <MainBody />
      <MainBody />
      <MainBody />
      <MainBody />
      <MainBody />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
