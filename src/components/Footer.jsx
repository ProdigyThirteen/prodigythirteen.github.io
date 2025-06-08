export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 text-black dark:text-white p-4 shadow-md p-4 md:px-8 flex justify-between items-center">
      © {new Date().getFullYear()} William Monk
    </footer>
  );
}
