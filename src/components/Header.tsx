const Header = () => {
  return (
    <header className="grid grid-cols-3 gap-8 items-center bg-slate-100">
      <h1 className="text-4xl font-bold">
        <a href="#">LOGO</a>
      </h1>

      <a className="flex justify-center  bg-slate-400" href="#">
        Search
      </a>

      <nav>
        <ul className="flex gap-8 justify-end">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
