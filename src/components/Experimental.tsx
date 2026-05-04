import Link from "@docusaurus/Link";
import Admonition from "@theme/Admonition";

export default function Experimental({ children, feature, version }: any) {
  return (
    <Admonition type="warning" title="Experimental Feature">
      {version && (
        <p>
          This <b>experimental feature</b> was added in <b>v1.0</b>. Learn more
          about <Link to="/config">experimental features</Link>.
        </p>
      )}
      {children}
    </Admonition>
  );
}
