import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b  border-gray-800 px-8 py5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
