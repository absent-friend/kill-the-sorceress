import { DarkModeInit } from "../components/DarkModeToggle";

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href={import.meta.env.BASE_URL + '/favicon.png'}/>
      <DarkModeInit/>
    </>
  );
}
