import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="font-semibold h-20 lg:sticky lg:top-0 z-10 bg-slate-800 text-yellow-400">
      <div className="container mx-auto flex p-3 flex-col md:flex-row items-center">
        <a href="/">
          <img className="w-32" src={logo} alt="" />
        </a>

        <nav className="text-lg md:ml-auto md:mr-auto flex flex-wrap items-center justify-center space-x-5 lg:space-x-8">
            <a href="#"> home </a>
            <a href="#"> home </a>
            <a href="#"> home </a>
            <a href="#"> home </a>
          
        </nav>
        {/* Showing User name and Photo */}
        <span className="mr-1">
          <img className="w-9 rounded-full" alt="" />
        </span>
        <span className="m-2"></span>
      </div>
    </header>
  );
};

export default Header;
