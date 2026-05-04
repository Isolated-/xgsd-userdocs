import React from "react";
import clsx from "clsx";
import Admonition from "@theme/Admonition";
import Link from "@docusaurus/Link";

type Props = {
  title?: string;
  children: React.ReactNode;
};

ApiExample.Status = function Status({ type, link, label, children }: any) {
  const defaultedType = type ?? "info";

  return <Admonition type={defaultedType}>{children}</Admonition>;
};

ApiExample.Title = function Title({ children }: any) {
  return children;
};

ApiExample.Section = function Section({ title, children }: any) {
  return (
    <div>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};

ApiExample.Footer = function Footer({ since, link, experimental }: any) {
  return (
    <div>
      {since && !experimental && (
        <small>
          <i>
            This feature was added in <b>{since}</b>
            {link && (
              <span>
                &nbsp;(
                <a href={link}>
                  <b>learn more</b>
                </a>
                )
              </span>
            )}
            .
          </i>
        </small>
      )}

      {experimental && (
        <small>
          <i>
            This <b>experimental feature</b> was added in <b>{since}</b>.<br />
            Experimental features may change or be removed without notice.
          </i>
        </small>
      )}
    </div>
  );
};

export default function ApiExample({ title, children }: Props) {
  return (
    <div className={clsx("api-example")}>
      {title && <h3>Example: {title}</h3>}
      <div className="api-example__content">{children}</div>
    </div>
  );
}
