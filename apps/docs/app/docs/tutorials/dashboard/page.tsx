"use client";

import React from "react";
import { CodeBlock } from "../../../components/DocParts";

export default function BuildDashboardTutorial() {
  return (
    <>
      <div className="doc-page-header">
        <h1 className="doc-page-header__title">Tutorial: Build an Admin Dashboard</h1>
        <p className="doc-page-header__desc">
          Learn how to assemble StarKit components to build a robust, neo-brutalist admin dashboard.
        </p>
      </div>

      <div className="doc-content" style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "32px" }}>
        
        <section>
          <h2>Step 1: The Layout & Navbar</h2>
          <p style={{ margin: "16px 0" }}>
            Every dashboard needs a navigation bar. We will use the <code>Navbar</code> component and place our dashboard content below it.
          </p>
          <CodeBlock code={`import { Navbar, Button } from "starkit";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--brut-gray)" }}>
      <Navbar
        brand={<b>AdminPanel</b>}
        links={[
          { key: "home", label: "Overview", active: true },
          { key: "users", label: "Users" },
          { key: "settings", label: "Settings" }
        ]}
        actions={<Button variant="outline" size="sm">Logout</Button>}
        shadow
      />
      <main style={{ padding: "32px", maxWidth: "1200px", margin: "0 auto" }}>
        {children}
      </main>
    </div>
  );
}`} />
        </section>

        <section>
          <h2>Step 2: Metric Cards</h2>
          <p style={{ margin: "16px 0" }}>
            Use a CSS Grid layout with the <code>Card</code> component to display key metrics at the top of your dashboard.
          </p>
          <CodeBlock code={`import { Card } from "starkit";

export function MetricsGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
      <Card padding="lg" style={{ backgroundColor: "var(--brut-yellow)" }}>
        <h3>Total Users</h3>
        <p style={{ fontSize: "32px", fontWeight: "bold" }}>1,234</p>
      </Card>
      <Card padding="lg" style={{ backgroundColor: "var(--brut-blue)", color: "#fff" }}>
        <h3>Revenue</h3>
        <p style={{ fontSize: "32px", fontWeight: "bold" }}>$45,000</p>
      </Card>
      <Card padding="lg">
        <h3>Active Sessions</h3>
        <p style={{ fontSize: "32px", fontWeight: "bold" }}>89</p>
      </Card>
    </div>
  );
}`} />
        </section>

        <section>
          <h2>Step 3: Integrating the DataTable</h2>
          <p style={{ margin: "16px 0" }}>
            Now, let's add the <code>DataTable</code> to display recent transactions or user lists. We can use the <code>Badge</code> component inside our columns for status indicators.
          </p>
          <CodeBlock code={`import { DataTable, Badge } from "starkit";

export function UsersTable() {
  const columns = [
    { key: "name", label: "User Name", sortable: true },
    { key: "email", label: "Email" },
    { 
      key: "status", 
      label: "Status", 
      render: (status) => (
        <Badge variant={status === "Active" ? "success" : "danger"}>
          {status}
        </Badge>
      )
    }
  ];

  const data = [
    { id: 1, name: "Alice", email: "alice@example.com", status: "Active" },
    { id: 2, name: "Bob", email: "bob@example.com", status: "Suspended" },
  ];

  return (
    <div style={{ marginTop: "32px" }}>
      <h2 style={{ marginBottom: "16px" }}>Recent Users</h2>
      <DataTable 
        columns={columns} 
        data={data} 
        selectable 
        striped 
      />
    </div>
  );
}`} />
        </section>

        <section>
          <h2>Summary</h2>
          <p style={{ margin: "16px 0" }}>
            By composing these elements, you instantly get a highly functional and brutally stylish dashboard. 
            Check out the live template in our <a href="/templates/dashboard" style={{ textDecoration: "underline", fontWeight: "bold" }}>Templates</a> section to see it in action!
          </p>
        </section>

      </div>
    </>
  );
}
