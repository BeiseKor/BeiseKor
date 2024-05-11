import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/dashboard/new-project">New Project</Link></li>
          <li><Link to="/dashboard/all-projects">All Projects</Link></li>
          <li><Link to="/dashboard/add-snippet">Add Snippet</Link></li>
          <li><Link to="/dashboard/my-snippets">My Snippets</Link></li>
          <li><Link to="/dashboard/code-comments">Code Comments</Link></li>
          <li><Link to="/dashboard/search">Search</Link></li>
          <li><Link to="/dashboard/tags">Tags</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;