import CodeBlock from "@theme/CodeBlock";
import React from "react";

export default function Block({ filename, language, children }: any) {
  const code =
    typeof children === "string"
      ? children
      : React.Children.toArray(children).join("");

  return (
    <CodeBlock language={language} title={filename}>
      {code}
    </CodeBlock>
  );
}
