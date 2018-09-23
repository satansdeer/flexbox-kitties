import * as React from "react";
import "./App.css";
import { levels } from "./levels";

const level = 16;

interface IAppState {
  roomStyle: string;
}

function getColor(value: string) {
  switch (value) {
    case "r":
      return "red";
    case "g":
      return "green";
    default:
      return "yellow";
  }
}

function styleString(value: { [key: string]: string }) {
  return Object.entries(value).reduce(
    (cssString: string, [propName, propValue]) => {
      return `${cssString}${propName}:${propValue};`;
    },
    ""
  );
}

class App extends React.Component<{}, IAppState> {
  public state = { roomStyle: "" };

  public render() {
    return (
      <>
        <style>
          {`.background ${levels[level].selector ||
            ""} {${styleString(levels[level].style)}}
            .room ${levels[level].selector || ""} {
             ${this.state.roomStyle}

            }
        `}
        </style>
        <div className="sidebar">
          <div
            dangerouslySetInnerHTML={{
              __html: levels[level].instructions.en
            }}
          />
          <div className="editor">
            <div className="line-numbers">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <>
                  {num}
                  <br />
                </>
              ))}
            </div>
            <pre>{levels[level].before}</pre>
            <textarea
              value={this.state.roomStyle}
              className="code"
              style={{
                height: `${Object.keys(levels[level].style)
                  .length * 20}px`
              }}
              autoFocus={true}
              onChange={this.updateStyle}
            />
            <pre>{levels[level].after}</pre>
          </div>
        </div>
        <div className="board">
          <div className="room">
            {levels[level].board.split("").map(color => {
              return (
                <div
                  key={color}
                  className={`cat ${getColor(color)}`}
                >
                  <div className={`cat-bg`} />
                </div>
              );
            })}
          </div>
          <div className="background">
            {levels[level].board.split("").map(color => {
              return (
                <div
                  key={color}
                  className={`litterbox ${getColor(color)}`}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }

  private updateStyle = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    this.setState({ roomStyle: e.target.value });
  };
}

export default App;
