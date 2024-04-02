import "./header.styles.scss";

export function Header() {
  return (
    <div className="header">
      <div className="headerBackground" />
      <div className="headerText">
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1>
              Frisbees<span></span>
            </h1>
          </div>

          <div className="role">
            <div className="block"></div>
            <p>Mehr als nur Kino</p>
          </div>
        </div>
      </div>
    </div>
  );
}
