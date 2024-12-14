# PocketWatcher

A starter template for building full-stack applications with Next.js and PocketBase, deployable to Fly.io.

## Features

- 🚀 Next.js 15+ for the frontend
- 📦 PocketBase as a simple yet powerful backend
- 🐳 Docker setup for development and production
- ☁️ Ready to deploy to Fly.io

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)
- Fly.io CLI (for deployment)

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pocketwatcher.git
cd pocketwatcher
```

2. Start the development environment:

```bash
docker-compose up
```

3. Set up PocketBase:

   - Visit http://localhost:8090/\_/ in your browser
   - Create your admin account when prompted
   - Create a new collection named "page_views":
     1. Click "New collection"
     2. Enter "page_views" as the name
     3. Add a required number field named "count"
     4. Go to Settings → Access Rules
     5. Enable public access for all CRUD operations (create, read, update, delete)

4. Access the applications:
   - Next.js: http://localhost:3000
   - PocketBase Admin: http://localhost:8090/\_/

### Deployment

1. Install the Fly.io CLI and login:

```bash
curl -L https://fly.io/install.sh | sh
fly auth login
```

2. Deploy your application:

```bash
fly launch
fly deploy
```

## Project Structure

```
├── app/                 # Next.js application
├── pb_data/            # PocketBase data directory
├── docker-compose.yml  # Docker compose configuration
├── start.sh           # Container startup script
└── Dockerfile         # Docker build configuration
```

## Demo Features

### Page View Counter

The demo includes a simple page view counter that demonstrates:

- Public collection access
- Real-time updates using PocketBase subscriptions
- Basic CRUD operations
- Error handling and user feedback

## License

MIT
