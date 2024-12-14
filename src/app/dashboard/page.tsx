import { cookies } from "next/headers";
import { logout } from "../actions";

export default async function Page() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("pb_auth");

  if (!cookie) throw new Error("Not logged in");

  const { model } = JSON.parse(cookie.value);

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <form action={logout}>
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </form>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">User Information</h2>
          <pre className="bg-white p-4 rounded-md overflow-auto">
            {JSON.stringify(model, null, 2)}
          </pre>
        </div>
      </div>
    </main>
  );
}
