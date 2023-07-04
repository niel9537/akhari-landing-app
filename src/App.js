import IconAkhari from "./assets/LogoAkhari.png";

function App() {
  const menus = ["About", "Features", "Pricing", "Testimonials", "Help"];

  return (
    <div className="App bg-white">
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 item-center space-x-36">
        <img alt="icon-akhari" src={IconAkhari} className="w-36"></img>
        <div className="flex-1">
          <ul className="flex flex-1">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </header>
    </div>
  );
}

export default App;
