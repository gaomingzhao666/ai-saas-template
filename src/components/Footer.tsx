export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="fixed z-50 bottom-0 w-full ring rounded-t-3xl  bg-white/50 dark:bg-black/50  px-4 py-8 text-center text-sm text-gray-600 backdrop-blur">
      <p>© {year} Your Corporation Name</p>
    </footer>
  );
};
