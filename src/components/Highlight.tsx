import Details from "@theme/Details";

export default function Highlight({ children, summary }: any) {
  return <Details summary={summary}>{children}</Details>;
}
