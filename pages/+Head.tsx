export default function HeadDefault() {
  const darkModeInit = `
  let theme = window.localStorage.getItem("theme");
  if (theme === null) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    window.localStorage.setItem("theme", theme);
  }
  document.documentElement.classList.toggle("dark", theme === "dark");
  `;
  return (
    <>
      <link rel="icon" href={import.meta.env.BASE_URL + 'favicon.png'}/>
      <script lang="js" innerHTML={darkModeInit}></script>
    </>
  );
}
