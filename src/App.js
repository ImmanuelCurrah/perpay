import Layout from "./components/layout/Layout";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <div className="overflow-auto">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
