import React from "react";

interface ButtonProps {
  value: string;
}
export default function Button({ value }: ButtonProps) {
  return <button>{value}</button>;
}
