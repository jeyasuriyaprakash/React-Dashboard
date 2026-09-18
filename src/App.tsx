import React from "react";

const stats = [
  { label: "Total Projects", value: "24", icon: "bi-kanban", change: "+12%" },
  { label: "Completed", value: "18", icon: "bi-check-circle", change: "+8%" },
  { label: "In Progress", value: "04", icon: "bi-hourglass-split", change: "+4%" },
  { label: "Team Members", value: "12", icon: "bi-people", change: "+2%" },
];

const activities = [
  ["Dashboard UI completed", "Today, 09:30 AM", "bi-check2-circle"],
  ["Profile project updated", "Yesterday, 04:15 PM", "bi-person-check"],
  ["New contact request received", "Yesterday, 11:20 AM", "bi-envelope"],
  ["Help center content added", "18 Sep, 10:05 AM", "bi-question-circle"],
];

export default function App() {
  return <div className="app-shell">
    <nav className="navbar navbar-dark bg-primary px-3 px-lg-4"><span className="navbar-brand fw-bold"><i className="bi bi-grid-1x2-fill me-2"/>React Dashboard</span><span className="text-white small">Portfolio Project</span></nav>
    <main className="container-fluid p-3 p-lg-4">
      <div className="mb-4"><h1 className="h3 fw-bold mb-1">Dashboard Overview</h1><p className="text-secondary mb-0">A responsive React JS dashboard built with TypeScript and Bootstrap.</p></div>
      <div className="row g-3 mb-4">{stats.map(s=><div className="col-12 col-sm-6 col-xl-3" key={s.label}><div className="card stat-card h-100"><div className="card-body d-flex justify-content-between"><div><p className="text-secondary mb-2">{s.label}</p><h2 className="fw-bold mb-2">{s.value}</h2><span className="text-success small fw-semibold">{s.change} this month</span></div><div className="stat-icon"><i className={`bi ${s.icon}`}/></div></div></div></div>)}</div>
      <div className="row g-4"><div className="col-12 col-lg-8"><div className="card h-100"><div className="card-body"><div className="d-flex justify-content-between mb-3"><h2 className="h5 fw-bold mb-0">Recent Activity</h2><button className="btn btn-sm btn-outline-primary">View all</button></div>{activities.map(([title,time,icon])=><div className="activity" key={title}><div className="activity-icon"><i className={`bi ${icon}`}/></div><div><div className="fw-semibold">{title}</div><div className="small text-secondary">{time}</div></div></div>)}</div></div></div>
        <div className="col-12 col-lg-4"><div className="card h-100"><div className="card-body"><h2 className="h5 fw-bold">Quick Actions</h2><div className="d-grid gap-2 mt-3"><button className="btn btn-primary"><i className="bi bi-plus-lg me-2"/>Create Project</button><button className="btn btn-outline-primary"><i className="bi bi-person-plus me-2"/>Add Member</button><button className="btn btn-outline-secondary"><i className="bi bi-download me-2"/>Download Report</button></div></div></div></div></div>
    </main>
  </div>;
}