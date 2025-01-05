const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-1 bg-gray-100">
      <div className="mx-auto grid h-full w-full max-w-[1024px] p-8">
        {children}
      </div>
    </main>
  );
};

export default Main;
