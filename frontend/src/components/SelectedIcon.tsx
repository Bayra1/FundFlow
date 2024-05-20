import React from "react";
import { FirstRow } from "./utils/Categories";

type PropsType = {
  propIndex: number;
  propColor: string;
};

export const SelectedIconComp = ({ propIndex, propColor }: PropsType) => {
  const iconElement = FirstRow[propIndex].icon;

  return React.cloneElement(iconElement, {
    children: React.Children.map(iconElement.props.children, (child: any) =>
      React.cloneElement(child, {
        fill: propColor,
      })
    ),
  });
};


