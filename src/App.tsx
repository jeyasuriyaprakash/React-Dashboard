import React, { useState } from "react";

const stats = [
  { label: "Total Projects", value: "24", trend: "+12.5%", icon: "bi-kanban-fill", tone: "blue" },
  { label: "Completed", value: "18", trend: "+8.2%", icon: "bi-check2-circle", tone: "green" },
  { label: "In Progress", value: "04", trend: "+4.1%", icon: "bi-lightning-charge-fill", tone: "orange" },
  { label: "Team Members", value: "12", trend: "+2.4%", icon: "bi-people-fill", tone: "purple" },
];

const projects = [
  { name: "BPCL Event Management", type: "React + SPFx", progress: 86, status: "In progress", icon: "bi-calendar2-event" },
  { name: "Corporate Profile", type: "React + Bootstrap", progress: 100, status: "Completed", icon: "bi-person-badge" },
  { name: "Help & Contact Center", type: "React + TypeScript", progress: 72, status: "In progress", icon: "bi-life-preserver" },
];

const activities = [
  ["Dashboard UI upgraded", "Today, 09:30 AM", "bi-stars", "blue"],
  ["Profile project updated", "Yesterday, 04:15 PM", "bi-person-check-fill", "purple"],
  ["New contact request received", "Yesterday, 11:20 AM", "bi-envelope-fill", "orange"],
  ["Help center content added", "18 Sep, 10:05 AM", "bi-question-circle-fill", "green"],
];

const bars = [42, 58, 48, 72, 64, 82, 76, 92, 68, 86, 74, 96];

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const navigate = (label: string) => {
    setActive(label);
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-shell">
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><i className="bi bi-grid-1x2-fill" /></div>
          <div>
            <div className="brand-name">ReactBoard</div>
            <div className="brand-subtitle">Portfolio Dashboard</div>
          </div>
        </div>

        <div className="sidebar-label">Workspace</div>
        <nav className="sidebar-nav">
          {[
            ["Dashboard", "bi-grid-1x2-fill"],
            ["Projects", "bi-kanban"],
            ["Team", "bi-people"],
            ["Messages", "bi-chat-left-text"],
            ["Analytics", "bi-bar-chart-line"],
          ].map(([label, icon]) => (
            <button
              key={label}
              className={`nav-item ${active === label ? "active" : ""}`}
              onClick={() => navigate(label)}
            >
              <i className={`bi ${icon}`} />
              <span>{label}</span>
              {label === "Messages" && <span className="nav-badge">3</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-label mt-4">Manage</div>
        <nav className="sidebar-nav">
          {[
            ["Settings", "bi-gear"],
            ["Help Center", "bi-question-circle"],
          ].map(([label, icon]) => (
            <button key={label} className={`nav-item ${active === label ? "active" : ""}`} onClick={() => navigate(label)}>
              <i className={`bi ${icon}`} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon"><i className="bi bi-rocket-takeoff-fill" /></div>
            <strong>Portfolio ready</strong>
            <p>Showcase your React skills with a polished dashboard.</p>
            <button onClick={() => navigate("Projects")}>View projects <i className="bi bi-arrow-right" /></button>
          </div>
          <div className="profile-mini">
            <div className="avatar">JG</div>
            <div className="profile-copy">
              <strong>Jeyaprakash</strong>
              <span>Front-End Developer</span>
            </div>
            <i className="bi bi-three-dots-vertical" />
          </div>
        </div>
      </aside>

      {sidebarOpen && <button className="sidebar-backdrop" aria-label="Close menu" onClick={() => setSidebarOpen(false)} />}

      <section className="main-area">
        <header className="topbar">
          <div className="d-flex align-items-center gap-3">
            <button className="mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
              <i className="bi bi-list" />
            </button>
            <div className="breadcrumb-wrap">
              <span>Workspace</span>
              <i className="bi bi-chevron-right" />
              <strong>{active}</strong>
            </div>
          </div>
          <div className="topbar-actions">
            <button className="icon-btn" aria-label="Search"><i className="bi bi-search" /></button>
            <button className="icon-btn notification" aria-label="Notifications"><i className="bi bi-bell" /><span /></button>
            <div className="top-profile">
              <div className="avatar small-avatar">JG</div>
              <div className="d-none d-md-block"><strong>Jeyaprakash</strong><span>Developer</span></div>
              <i className="bi bi-chevron-down d-none d-md-block" />
            </div>
          </div>
        </header>

        <main className="content">
          <section className="hero-row">
            <div>
              <div className="eyebrow"><span /> GOOD MORNING</div>
              <h1>Welcome back, Jeyaprakash 👋</h1>
              <p>Here is what's happening across your projects today.</p>
            </div>
            <button className="primary-btn"><i className="bi bi-plus-lg" /> New Project</button>
          </section>

          <section className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <div className={`stat-icon ${stat.tone}`}><i className={`bi ${stat.icon}`} /></div>
                <div className="stat-copy"><span>{stat.label}</span><strong>{stat.value}</strong></div>
                <div className="trend"><i className="bi bi-arrow-up-right" /> {stat.trend}</div>
              </article>
            ))}
          </section>

          <section className="dashboard-grid">
            <article className="panel chart-panel">
              <div className="panel-heading">
                <div><h2>Project activity</h2><p>Monthly delivery overview</p></div>
                <button className="period-btn">Last 12 months <i className="bi bi-chevron-down" /></button>
              </div>
              <div className="chart-summary">
                <strong>96%</strong><span><i className="bi bi-arrow-up-right" /> 14.8% vs last year</span>
              </div>
              <div className="bar-chart" aria-label="Project activity chart">
                {bars.map((height, index) => (
                  <div className="bar-column" key={index}>
                    <div className="bar-track"><div className="bar-fill" style={{ height: `${height}%` }} /></div>
                    <span>{["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"][index]}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel activity-panel">
              <div className="panel-heading">
                <div><h2>Recent activity</h2><p>Latest workspace updates</p></div>
                <button className="text-btn">View all</button>
              </div>
              <div className="activity-list">
                {activities.map(([title, time, icon, tone]) => (
                  <div className="activity-row" key={title}>
                    <div className={`activity-icon ${tone}`}><i className={`bi ${icon}`} /></div>
                    <div className="activity-copy"><strong>{title}</strong><span>{time}</span></div>
                    <i className="bi bi-chevron-right activity-arrow" />
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="dashboard-grid bottom-grid">
            <article className="panel projects-panel">
              <div className="panel-heading">
                <div><h2>Featured projects</h2><p>Your latest portfolio work</p></div>
                <button className="text-btn" onClick={() => navigate("Projects")}>View all projects <i className="bi bi-arrow-right" /></button>
              </div>
              <div className="project-list">
                {projects.map((project) => (
                  <div className="project-row" key={project.name}>
                    <div className="project-icon"><i className={`bi ${project.icon}`} /></div>
                    <div className="project-info"><strong>{project.name}</strong><span>{project.type}</span></div>
                    <div className="project-progress">
                      <div className="progress-meta"><span>{project.status}</span><strong>{project.progress}%</strong></div>
                      <div className="progress-track"><div className="progress-fill" style={{ width: `${project.progress}%` }} /></div>
                    </div>
                    <button className="row-action" aria-label={`Open ${project.name}`}><i className="bi bi-arrow-up-right" /></button>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel skills-panel">
              <div className="panel-heading">
                <div><h2>Tech stack</h2><p>Core tools used in projects</p></div>
              </div>
              <div className="skills">
                {[
                  ["React JS", "bi-braces", "blue"],
                  ["TypeScript", "bi-filetype-tsx", "purple"],
                  ["SharePoint / SPFx", "bi-microsoft", "orange"],
                  ["Bootstrap", "bi-bootstrap", "pink"],
                  ["WordPress", "bi-wordpress", "green"],
                ].map(([name, icon, tone]) => (
                  <div className="skill-pill" key={name}><span className={`skill-icon ${tone}`}><i className={`bi ${icon}`} /></span>{name}</div>
                ))}
              </div>
              <div className="portfolio-callout">
                <div><span>Built with</span><strong>React + TypeScript</strong></div>
                <i className="bi bi-code-slash" />
              </div>
            </article>
          </section>

          <footer className="dashboard-footer">
            <span>© 2026 ReactBoard Portfolio</span>
            <span>React JS · TypeScript · Bootstrap</span>
          </footer>
        </main>
      </section>
    </div>
  );
}
