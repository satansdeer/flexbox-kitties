import * as React from "react";
import "./App.css";
import { LevelMarker } from "./LevelMarker";
import { levels } from "./levels";

interface IAppState {
  roomStyle: string;
  level: number;
  tooltipOpened: boolean;
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
  public state = {
    level: 1,
    roomStyle: "",
    tooltipOpened: false
  };

  public render() {
    const { level } = this.state;

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
          <div className="header">
            <h1 className="title">Flexbox kitties</h1>
            <div className="level-counter">
              <button
                className="arrow left"
                onClick={this.togglePrevLevel}
              >
                ◀
              </button>
              <div
                className="level-indicator"
                onClick={this.toggleLevelsTooltip}
              >
                Level {this.state.level + 1} of{" "}
                {levels.length}
                <span className="caret">▾</span>
              </div>
              <button
                className="arrow right"
                onClick={this.toggleNextLevel}
              >
                ▶
              </button>
              {this.state.tooltipOpened && (
                <div className="levels-wrapper">
                  <div className="levels">
                    {levels.map((l, i) => (
                      <LevelMarker
                        key={i}
                        level={i}
                        currentLevel={level}
                        onClick={this.selectLevel}
                      />
                    ))}
                  </div>
                  <button className="label-reset">
                    Reset
                  </button>
                </div>
              )}
            </div>
          </div>
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
                  key={`${color}_${level}`}
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
                  key={`${color}_${level}`}
                  className={`litterbox ${getColor(color)}`}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }

  private selectLevel = (level: number) => {
    this.setState({
      level
    });
  };

  private toggleNextLevel = () => {
    this.setState({
      level: this.state.level + 1
    });
  };

  private togglePrevLevel = () => {
    this.setState({
      level: this.state.level - 1
    });
  };

  private toggleLevelsTooltip = () => {
    this.setState({
      tooltipOpened: !this.state.tooltipOpened
    });
  };

  private updateStyle = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    this.setState({ roomStyle: e.target.value });
  };
}

export default App;
