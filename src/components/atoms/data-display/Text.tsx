import React from "react";
import { Typography } from "@mui/material";
import classNames from "classnames";
import s from "./Text.module.scss";

interface TextProps {
  align?: "center" | "inherit" | "justify" | "left" | "right";
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "textPrimary"
    | "textSecondary"
    | "textDisabled";
  component?: React.ElementType;
  className?: string;
  sx?: React.CSSProperties;
  type?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"; //variant
}

const variantStyles: Record<string, React.CSSProperties> = {
  h1: { fontSize: "6.8em" },
  h2: { fontSize: "6em" },
  h3: { fontSize: "4.9em" },
  h4: { fontSize: "3.8em" },
  h5: { fontSize: "2.7em" },
  h6: { fontSize: "1.8em" },
  subtitle1: { fontSize: "1.3em", fontWeight: "bold" },
  subtitle2: { fontSize: "0.85em", fontWeight: "bold" },
  body1: { fontSize: "1em" },
  body2: { fontSize: "0.92em" },
  caption: {},
  button: {},
  overline: {},
};

export const Text: React.FC<TextProps> = (props) => {
  const {
    align,
    children,
    color,
    component = "p",
    sx,
    type = "body1",
    className,
  } = props;

  const textClasses = classNames(s.text, s[`text__${type}`], className);

  return (
    <Typography
      align={align}
      variant={type}
      color={color}
      component={component}
      sx={{ ...variantStyles[type], ...sx }}
      className={textClasses}
    >
      {children}
    </Typography>
  );
};
