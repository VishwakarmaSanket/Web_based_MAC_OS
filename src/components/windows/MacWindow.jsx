import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "40vw",
  height = "40vh",
  windowName,
  setWindowsState,
}) => {
  return (
    <Rnd
      dragHandleClassName="nav"
      enableResizing={true}
      default={{
        width: width,
        height: height,
        x: 300,
        y: 200,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onMouseDown={(e) => {
                e.stopPropagation();
                setWindowsState((state) => ({
                  ...state,
                  [windowName]: false,
                }));
              }}
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>sanketvishwkarma - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
