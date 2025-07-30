# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## ``
📦 courier-frontend/
├── 📁 public
│   └── index.html
├── 📁 src
│   ├── 📁 assets                 # Images, icons, logos etc.
│   ├── 📁 components             # Reusable UI components (Navbar, ParcelCard, etc.)
│   ├── 📁 context
│   │   └── AuthContext.jsx      # Auth logic and user state
│   ├── 📁 hooks                  # Custom React hooks (optional)
│   ├── 📁 layouts                # Page layouts (AdminLayout, CustomerLayout etc.)
│   ├── 📁 pages
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Home.jsx
│   │   ├── BookParcel.jsx
│   │   ├── TrackParcel.jsx
│   │   ├── CustomerDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AgentDashboard.jsx
│   │   └── NotFound.jsx
│   ├── 📁 routes
│   │   ├── AppRoutes.jsx        # All route definitions
│   │   └── ProtectedRoute.jsx   # Role-based protected route component
│   ├── 📁 services
│   │   ├── api.js               # Axios base instance & API methods
│   │   └── socket.js            # Socket.IO client setup
│   ├── 📁 styles
│   │   └── index.css            # Tailwind CSS imports & custom styles
│   ├── App.jsx
│   ├── main.jsx
│   └── .env                     # Environment variables
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
``