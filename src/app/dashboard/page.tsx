import { cookies } from "next/headers";
import { logout } from "../actions";

export default async function Page() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("pb_auth");

  if (!cookie) throw new Error("Not logged in");

  const { model } = JSON.parse(cookie.value);

  return (
    <main className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <form action={logout}>
            <button type="submit" className="logout-button">
              Logout
            </button>
          </form>
        </div>

        <div className="info-section">
          <h2 className="info-title">User Information</h2>
          <pre className="info-content">{JSON.stringify(model, null, 2)}</pre>
        </div>
      </div>
    </main>
  );
}
