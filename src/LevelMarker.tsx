import * as React from "react";

interface ILevelMarkerProps {
  level: number;
  currentLevel: number;
  onClick: (level: number) => void;
}

export class LevelMarker extends React.Component<
  ILevelMarkerProps
> {
  public render() {
    const { level, currentLevel } = this.props;
    return (
      <span
        onClick={this.onClick}
        className={`level-marker ${level === currentLevel &&
          "current"} ${level === 0 && "solved"}`}
      >
        {level + 1}
      </span>
    );
  }
  private onClick = () => {
    this.props.onClick(this.props.level);
  };
}
