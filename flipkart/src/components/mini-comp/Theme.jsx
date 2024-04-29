import useGlobalContext from "../../context/Context";

function Theme() {
  const { changeTheme } = useGlobalContext();

  const themes = [
    "light",
    "dark",
    "cyberpunk",
    "valentine",
    "halloween",
    "forest",
    "fantasy",
    "luxury",
    "dracula",
    "business",
    "lemonade",
    "night",
    "coffee",
    "dim",
    "nord",
    "sunset",
  ];

  return (
    <div className="dropdown dropdown-end z-40">
      <div tabIndex={0} role="button" className="btn btn-sm m-1 w-24">
        <span>Theme</span>
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        {themes.map((theme, i) => (
          <li key={i}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme}
              value={theme}
              onClick={() => changeTheme(theme)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Theme;
