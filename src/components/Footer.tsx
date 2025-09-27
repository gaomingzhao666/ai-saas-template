export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>© {year} Your Corporation Name</p>
    </footer>
  );
};
