//React function
//SPL function :: understood by REACT
//return JSX (means its a react function)
//App tag is default

function App() {
  return (
    <div>
      <h1>"!!! Hello World !!!"</h1>
      <hr />
      <h1>"Project Title"</h1>
      <Header />
      <hr />
      <h1>"Project Title"</h1>
      <Header />
      <hr />
      <h1>"Project Title"</h1>
      <Header />
      <hr />
      <h1>"Project Title"</h1>
      <Header />
      <hr />
    </div>
  );
}

//User Defined Tag
//<Header />
//re-usable block of code using header tag
function Header() {
  return (
    <div>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.Lorem
      ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    </div>
  );
}

export default App;
