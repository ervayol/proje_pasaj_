import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DebugBoundary({ children }: Props) {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (typeof child === "object" && !React.isValidElement(child)) {
          console.error("❌ Invalid React child found:", child);
        }
        return child;
      })}
    </>
  );
}

