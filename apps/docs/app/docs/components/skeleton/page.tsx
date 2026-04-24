"use client";

import { Skeleton } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const skeletonProps = [
  {
    name: "variant",
    type: "'text' | 'heading' | 'avatar' | 'card' | 'button' | 'image'",
    default: "'text'",
    description: "Shape variant of the skeleton.",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Size preset (mostly applies to avatar).",
  },
  {
    name: "width",
    type: "string | number",
    default: "—",
    description: "Custom width.",
  },
  {
    name: "height",
    type: "string | number",
    default: "—",
    description: "Custom height.",
  },
  {
    name: "lines",
    type: "number",
    default: "1",
    description: "Number of skeleton lines to render (for text variant).",
  },
  {
    name: "borderless",
    type: "boolean",
    default: "false",
    description: "Removes the solid black border.",
  },
];

export default function SkeletonPage() {
  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">Skeleton</h1>
        <p className="doc-page-header__desc">
          Placeholder components for loading states with a brutalist pulse animation.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <Preview
          direction="col"
          title="Different shapes for different contents"
          code={`<Skeleton variant="heading" />
<Skeleton variant="text" lines={3} />
<div style={{ display: 'flex', gap: 16 }}>
  <Skeleton variant="avatar" size="lg" />
  <Skeleton variant="card" width={200} height={120} />
</div>`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            <Skeleton variant="heading" />
            <Skeleton variant="text" lines={3} />
            <div style={{ display: 'flex', gap: 16 }}>
              <Skeleton variant="avatar" size="lg" />
              <Skeleton variant="card" width={200} height={120} />
            </div>
          </div>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={skeletonProps} />
      </section>
    </>
  );
}
