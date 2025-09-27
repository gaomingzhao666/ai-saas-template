export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full border-t rounded-3xl bg-white/50 px-4 py-8 text-center text-sm text-gray-600 backdrop-blur-sm">
      <p>© {year} Your Corporation Name</p>
    </footer>
  );
};
