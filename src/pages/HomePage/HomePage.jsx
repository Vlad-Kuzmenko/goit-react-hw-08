import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={s.wrapper}>
      <title>Welcome</title>
      <div className={s.container}>
        <h1 className={s.title}>
          We will help you keep your contacts in a safe place{" "}
          <span className={s.emoji} role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </div>
  );
}
