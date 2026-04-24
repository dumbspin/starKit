"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  DataTable,
  Accordion,
  FormField,
  Input,
  Button,
  Card,
  Skeleton,
  Badge,
} from "../../lib/starkit";

export default function DashboardPreview() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { key: "home", label: "Dashboard", href: "#", active: true },
    { key: "projects", label: "Projects", href: "#" },
    { key: "settings", label: "Settings", href: "#" },
  ];

  const tableColumns = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Project Name", sortable: true },
    {
      key: "status",
      label: "Status",
      render: (val: any) => (
        <Badge variant={val === "Active" ? "success" : "default"}>{val}</Badge>
      ),
    },
    { key: "date", label: "Created Date", sortable: true },
  ];

  const tableData = [
    { id: "PRJ-01", name: "StarKit Redesign", status: "Active", date: "2026-04-20" },
    { id: "PRJ-02", name: "Backend Migration", status: "Pending", date: "2026-04-21" },
    { id: "PRJ-03", name: "Marketing Site", status: "Active", date: "2026-04-22" },
    { id: "PRJ-04", name: "Analytics Dashboard", status: "Archived", date: "2026-04-23" },
    { id: "PRJ-05", name: "User Research", status: "Active", date: "2026-04-24" },
  ];

  const accordionItems = [
    {
      key: "profile",
      label: "Profile Settings",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
          <FormField label="Full Name" required>
            <Input placeholder="John Doe" />
          </FormField>
          <FormField label="Email Address" hint="We'll never share your email.">
            <Input type="email" placeholder="john@example.com" />
          </FormField>
          <Button variant="primary" style={{ alignSelf: "flex-start" }}>Save Changes</Button>
        </div>
      ),
    },
    {
      key: "security",
      label: "Security",
      content: <p>Change your password or set up two-factor authentication.</p>,
    },
    {
      key: "notifications",
      label: "Notifications",
      content: <p>Configure email and push notifications.</p>,
      disabled: true,
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--brut-bg, #f4f4f5)" }}>
      <Navbar
        brand={<span>⚡ AdminPanel</span>}
        links={navLinks}
        actions={<Button variant="outline" size="sm">Logout</Button>}
        sticky
        shadow
      />

      <main style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
        
        {/* Header Section */}
        <div>
          <h1 style={{ fontSize: "32px", marginBottom: "8px", fontWeight: 900 }}>Welcome back, Admin</h1>
          <p style={{ opacity: 0.7, fontSize: "18px" }}>Here's an overview of your projects and settings.</p>
        </div>

        {/* Top Cards / Skeletons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {loading ? (
            <>
              <Skeleton variant="card" />
              <Skeleton variant="card" />
              <Skeleton variant="card" />
            </>
          ) : (
            <>
              <Card padding="lg">
                <h3 style={{ marginBottom: "16px" }}>Total Projects</h3>
                <p style={{ fontSize: "36px", fontWeight: 900 }}>12</p>
              </Card>
              <Card padding="lg">
                <h3 style={{ marginBottom: "16px" }}>Active Users</h3>
                <p style={{ fontSize: "36px", fontWeight: 900 }}>1,204</p>
              </Card>
              <Card padding="lg">
                <h3 style={{ marginBottom: "16px" }}>System Status</h3>
                <Badge variant="success" dot size="lg">Operational</Badge>
              </Card>
            </>
          )}
        </div>

        {/* Data Table Section */}
        <Card padding="lg">
          <h2 style={{ marginBottom: "24px", fontSize: "24px", fontWeight: 900 }}>Recent Projects</h2>
          {loading ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Skeleton variant="heading" />
              <Skeleton variant="text" lines={4} />
            </div>
          ) : (
            <DataTable
              columns={tableColumns}
              data={tableData}
              selectable
              striped
              pageSize={3}
              renderActions={() => (
                <Button variant="ghost" size="sm">Edit</Button>
              )}
            />
          )}
        </Card>

        {/* Accordion Settings Section */}
        <Card padding="lg">
          <h2 style={{ marginBottom: "24px", fontSize: "24px", fontWeight: 900 }}>System Settings</h2>
          {loading ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Skeleton variant="text" lines={3} />
            </div>
          ) : (
            <Accordion items={accordionItems} bordered multiple defaultOpenKeys={["profile"]} />
          )}
        </Card>

      </main>
    </div>
  );
}
