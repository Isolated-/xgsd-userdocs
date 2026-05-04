import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import Block from "./Block";

type TabConfig = {
  value: string;
  label: string;
  language: string;
  code?: string;
  filename?: string;
};

function renderTab(
  { value, label, language, filename, code }: TabConfig,
  children: React.ReactNode,
) {
  if (!code) return null;

  return (
    <TabItem key={value} value={value} label={label}>
      {children && <div style={{ marginBottom: "1rem" }}>{children}</div>}

      <Block language={language} filename={filename} code={code} />
    </TabItem>
  );
}

export default function ApiTabs({ children, ...opts }: any) {
  const {
    defaultValue,
    filename,
    bash,
    npm,
    yarn,
    cli,
    curl,
    js,
    ts,
    yaml,
    json,
  } = opts;

  const tabs: TabConfig[] = [
    { value: "bash", label: "Bash", language: "bash", code: bash },
    { value: "npm", label: "npm", language: "bash", code: npm },
    { value: "yarn", label: "Yarn", language: "bash", code: yarn },
    { value: "cli", label: "CLI", language: "bash", code: cli },
    { value: "curl", label: "curl", language: "bash", code: curl },
    {
      value: "node",
      label: "Node.js",
      language: "javascript",
      code: js,
      filename: filename ? filename + ".js" : undefined,
    },
    {
      value: "typescript",
      label: "TypeScript",
      language: "typescript",
      code: ts,
      filename: filename ? filename + ".ts" : undefined,
    },
    {
      value: "yaml",
      label: "yaml",
      language: "yaml",
      code: yaml,
      filename: filename ? filename + ".yaml" : undefined,
    },
    {
      value: "json",
      label: "JSON",
      language: "json",
      code: json,
      filename: filename ? filename + ".json" : undefined,
    },
  ];

  return (
    <Tabs defaultValue={defaultValue}>
      {tabs.map((tab) => renderTab(tab, children))}
    </Tabs>
  );
}
