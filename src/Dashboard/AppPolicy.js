import React from "react";
import { useParams } from "react-router-dom";
import appPolicies from "./appPolicyContent";

const LINK_PATTERN = /([\w.+-]+@[\w-]+\.[\w.]+|https?:\/\/[^\s,]+)/g;

function linkify(text) {
  return text.split(LINK_PATTERN).map((part, i) => {
    if (i % 2 === 0) return part;
    const href = part.includes("@") ? `mailto:${part}` : part;
    return (
      <a key={i} href={href}>
        {part}
      </a>
    );
  });
}

function renderLines(text) {
  return text.split("\n").map((line, i) => (
    <React.Fragment key={i}>
      {i > 0 && <br />}
      {linkify(line)}
    </React.Fragment>
  ));
}

function renderBlock(block, i) {
  if (block.startsWith("### ")) return <h3 key={i}>{block.slice(4)}</h3>;
  if (block.startsWith("## ")) return <h2 key={i}>{block.slice(3)}</h2>;
  if (block.startsWith("- ")) {
    return (
      <ul key={i}>
        {block.split("\n").map((item, j) => (
          <li key={j}>{linkify(item.slice(2))}</li>
        ))}
      </ul>
    );
  }
  return <p key={i}>{renderLines(block)}</p>;
}

function AppPolicy() {
  const { slug } = useParams();
  const policy = appPolicies[slug];

  if (!policy) {
    return (
      <div className="app-policy">
        <h1>Page not found</h1>
      </div>
    );
  }

  return (
    <div className="app-policy">
      <p className="app-policy-brand">AAYUR CARE</p>
      <h1>{policy.title}</h1>
      {policy.meta.map((line) => (
        <p key={line} className="app-policy-meta">
          {line}
        </p>
      ))}
      {policy.content.split("\n\n").map(renderBlock)}
    </div>
  );
}

export default AppPolicy;
