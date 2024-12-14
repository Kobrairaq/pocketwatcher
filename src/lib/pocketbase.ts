import PocketBase from "pocketbase";

// Use environment variables with fallbacks
const POCKETBASE_URL =
  process.env.NEXT_PUBLIC_POCKETBASE_URL ??
  // When running in Docker, use the service name
  (process.env.NODE_ENV === "production"
    ? "http://pocketbase:8090"
    : "http://localhost:8090");

// Create a single PocketBase instance to reuse connections
const pb = new PocketBase(POCKETBASE_URL);

export { pb };
