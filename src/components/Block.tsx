import CodeBlock from "@theme/CodeBlock";
import React from "react";

function stripIndent(str: string) {
  const lines = str.replace(/^\n+|\n+$/g, "").split("\n");
  const indent = Math.min(
    ...lines.filter((l) => l.trim()).map((l) => l.match(/^(\s*)/)![1].length),
  );
  return lines.map((l) => l.slice(indent)).join("\n");
}

export default function Block({ filename, language, code }: any) {
  const cleaned = typeof code === "string" ? stripIndent(code) : code;

  return (
    <CodeBlock language={language} title={filename}>
      {cleaned}
    </CodeBlock>
  );
}
