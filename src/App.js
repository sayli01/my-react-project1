import Header from "./pages/Header";
import MainBody from "./pages/MainBody";
import Footer from "./pages/Footer";

//return JSX
function App() {
  return (
    <div>
      <Header />
      <BootstrapDemo />
      <Footer />
    </div>
  );
}

function BootstrapDemo() {
  return (
    <div>
      <h1 className="bg-primary p=3 text-light">Bootstrap Demo</h1>
    </div>
  );
}

export default App;
