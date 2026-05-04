import Link from "@docusaurus/Link";
import Admonition from "@theme/Admonition";

export default function Experimental({ children, feature, version }: any) {
  return (
    <Admonition type="warning" title="Experimental Feature">
      {version && (
        <p>
          This <b>experimental feature</b> was added in <b>{version}</b>.
        </p>
      )}
      {children}
    </Admonition>
  );
}
