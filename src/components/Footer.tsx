const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-[1024px] items-center justify-center p-8 text-sm">
      Mariusz Ciastoń 2025 &nbsp;
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
