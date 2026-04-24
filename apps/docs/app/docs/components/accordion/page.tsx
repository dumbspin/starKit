"use client";

import { Accordion } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const accordionProps = [
  {
    name: "items",
    type: "AccordionItem[]",
    required: true,
    description: "Array of items containing key, label, and content.",
  },
  {
    name: "multiple",
    type: "boolean",
    default: "false",
    description: "Allow multiple items to be open simultaneously.",
  },
  {
    name: "defaultOpenKeys",
    type: "string[]",
    default: "[]",
    description: "Keys of initially open items.",
  },
  {
    name: "openKeys",
    type: "string[]",
    default: "—",
    description: "Controlled open keys.",
  },
  {
    name: "onChange",
    type: "(keys: string[]) => void",
    default: "—",
    description: "Callback when open keys change.",
  },
  {
    name: "bordered",
    type: "boolean",
    default: "false",
    description: "Wraps the accordion in a bordered container with a shadow.",
  },
];

export default function AccordionPage() {
  const items = [
    {
      key: "1",
      label: "What is StarKit?",
      content: <p>StarKit is a neo-brutalist React UI library focused on hard shadows, zero radius, and bold borders.</p>
    },
    {
      key: "2",
      label: "Is it accessible?",
      content: <p>Yes! We've built in ARIA attributes, keyboard navigation, and focus traps.</p>
    },
    {
      key: "3",
      label: "Can I use it with Next.js?",
      content: <p>Absolutely. It works perfectly with Next.js App Router and Pages Router.</p>
    }
  ];

  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">Accordion</h1>
        <p className="doc-page-header__desc">
          Expandable panels for organizing content with smooth height transitions.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Basic Usage</h2>
        <Preview
          direction="col"
          title="Single item open at a time"
          code={`const items = [
  { key: "1", label: "What is StarKit?", content: <p>...</p> },
  { key: "2", label: "Is it accessible?", content: <p>...</p> }
];

<Accordion items={items} />`}
        >
          <div style={{ maxWidth: '600px' }}>
            <Accordion items={items} />
          </div>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Bordered & Multiple</h2>
        <Preview
          direction="col"
          title="Bordered container allowing multiple panels to open"
          code={`<Accordion items={items} bordered multiple />`}
        >
          <div style={{ maxWidth: '600px' }}>
            <Accordion items={items} bordered multiple />
          </div>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={accordionProps} />
      </section>
    </>
  );
}
