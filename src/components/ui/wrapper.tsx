const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="wrapper" className="flex h-[calc(100vh)] flex-col">
      {children}
    </div>
  );
};

export default Wrapper;
