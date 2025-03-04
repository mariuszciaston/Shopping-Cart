const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-[1280px] items-center justify-center p-4 text-sm sm:p-8">
      <span>Mariusz Ciastoń 2025 &nbsp;</span>
      <a
        href="https://github.com/mariuszciaston/"
        target="_blank"
        rel="noopener"
      >
        <i
          className="fab fa-github fa-2x transition-transform duration-500 ease-in-out hover:rotate-1turn hover:scale-125 hover:transform"
          aria-hidden="true"
        ></i>
      </a>
    </footer>
  );
};

export default Footer;
