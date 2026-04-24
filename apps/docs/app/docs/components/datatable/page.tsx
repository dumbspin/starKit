"use client";

import { DataTable, Badge } from "@/app/lib/starkit";
import { Preview, PropsTable, CodeBlock } from "../../../components/DocParts";

const dataTableProps = [
  {
    name: "columns",
    type: "DataTableColumn[]",
    required: true,
    description: "Column definitions (key, label, sortable, render, width).",
  },
  {
    name: "data",
    type: "T[]",
    required: true,
    description: "Array of data rows.",
  },
  {
    name: "rowKey",
    type: "string",
    default: "'id'",
    description: "Property name for unique row keys.",
  },
  {
    name: "selectable",
    type: "boolean",
    default: "false",
    description: "Enables row selection via checkboxes.",
  },
  {
    name: "striped",
    type: "boolean",
    default: "false",
    description: "Adds alternating striped background to rows.",
  },
  {
    name: "pageSize",
    type: "number",
    default: "—",
    description: "Enables client-side pagination with the given page size.",
  },
];

export default function DataTablePage() {
  const columns = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "User Name", sortable: true },
    { 
      key: "role", 
      label: "Role", 
      render: (val: any) => <Badge variant={val === "Admin" ? "danger" : "default"}>{val}</Badge> 
    },
  ];

  const data = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Editor" },
    { id: 3, name: "Charlie", role: "Viewer" },
    { id: 4, name: "Diana", role: "Editor" },
  ];

  return (
    <>
      <div className="doc-page-header">
        <div className="doc-page-header__badge">Component</div>
        <h1 className="doc-page-header__title">DataTable</h1>
        <p className="doc-page-header__desc">
          Robust data table with sorting, selection, pagination, and custom rendering.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Basic Usage</h2>
        <Preview
          direction="col"
          title="Sortable, selectable, and striped table"
          code={`const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "role", label: "Role" },
];

<DataTable 
  columns={columns} 
  data={data} 
  selectable 
  striped 
/>`}
        >
          <div style={{ width: '100%', maxWidth: '800px' }}>
            <DataTable 
              columns={columns} 
              data={data} 
              selectable 
              striped 
            />
          </div>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Pagination</h2>
        <Preview
          direction="col"
          title="Client-side pagination"
          code={`<DataTable columns={columns} data={data} pageSize={2} />`}
        >
          <div style={{ width: '100%', maxWidth: '800px' }}>
            <DataTable columns={columns} data={data} pageSize={2} />
          </div>
        </Preview>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <PropsTable props={dataTableProps} />
      </section>
    </>
  );
}
