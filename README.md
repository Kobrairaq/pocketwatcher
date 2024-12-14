# PocketWatcher

A modern, full-stack financial tracking application built with Next.js and PocketBase, featuring a beautiful UI and robust authentication system.

## Features

- 🚀 Next.js 14+ App Router for the frontend
- 📦 PocketBase as a simple yet powerful backend
- 🔐 Complete authentication system with email/password
- 🎨 Beautiful UI with Tailwind CSS
- 🌐 Server-side rendering and client-side interactivity
- 🔄 Form handling with React Server Actions
- 🐳 Docker setup for development and production
- ☁️ Ready to deploy to Fly.io
- 🔒 Secure cookie-based authentication
- ✨ Modern, responsive design with gradient backgrounds
- 🛡️ Type-safe development with TypeScript

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

2. Install dependencies:

```bash
npm install
```

3. Start the development environment:

```bash
docker-compose up --build
```

4. Set up PocketBase:

   - Visit http://localhost:8090/\_/ in your browser
   - Create your admin account when prompted
   - Create a new collection named "users" with the following schema:
     - Email (email) - required, unique
     - Password (password) - required
   - Configure authentication settings in the PocketBase Admin UI
   - Set up proper security rules for user access

5. Access the applications:
   - Next.js: http://localhost:3000
   - PocketBase Admin: http://localhost:8090/\_/

### Authentication Features

- Secure login system with email/password
- User registration with password confirmation
- Server-side form validation
- Protected routes and authenticated sessions
- Secure cookie handling
- Automatic redirects after authentication
- Error handling and user feedback
- Type-safe authentication actions

## Project Structure

```
├── src/
│   ├── app/                    # Next.js application
│   │   ├── actions.ts         # Server actions for auth
│   │   ├── page.tsx          # Login page
│   │   └── register/         # Registration page
│   └── components/            # Shared components
├── pb_data/                   # PocketBase data directory
├── docker-compose.yml         # Docker compose configuration
├── start.sh                  # Container startup script
└── Dockerfile                # Docker build configuration
```

## Authentication Flow

1. User enters credentials on login/register page
2. Form data is processed by server actions
3. PocketBase validates credentials
4. On success:
   - Auth token is stored in HTTP-only cookie
   - User is redirected to dashboard
5. On error:
   - User receives feedback message
   - Form remains interactive

## Security Features

- HTTP-only cookies for token storage
- Server-side validation
- Password confirmation on registration
- Secure password handling
- Protected API routes
- Type-safe authentication flow
- CSRF protection with Next.js
- Secure session management

## Deployment

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

## Environment Variables

```env
NEXT_PUBLIC_POCKETBASE_URL=http://localhost:8090  # PocketBase URL
NODE_ENV=development                              # Environment (development/production)
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
