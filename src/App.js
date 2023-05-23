//React function
//SPL function :: understood by REACT
//return JSX (means its a react function)
//App tag is default-others can be called inside app()

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

//re-usable block of code using header tag
function Header() {
  return <h1>Hello Welcome </h1>;
}

function MainBody() {
  return (
    <div>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.Lorem
      ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
      <br />.
      <br />
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h1>This is Footer</h1>
    </div>
  );
}
export default App;
