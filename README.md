🎓 Assignment Submission - MERN Stack Internship Project
👨‍💻 Project Title: Courier and Parcel Management System (Back-End)
🕸️ Tech Stack: Node.js, Express.js, MongoDB, Mongoose, JWT, Role-Based Access

✅ Functional Requirements Implemented:
- Role-based authentication (Admin, Delivery Agent, Customer)
- JWT-based login & secure API access
- Customer registration & login APIs
- Book Parcel API with customer ID
- View booking history for logged-in customer
- Track parcel (GET coordinates)
- Admin dashboard: view metrics, assign agents, export CSV
- Delivery Agent: view assigned parcels, update parcel status & coordinates


🚀 Key API Endpoints:

🔐 Auth APIs
POST /api/v1/auth/register
POST /api/v1/auth/login
📦 Parcel APIs (Customer)
POST /api/v1/parcels
GET /api/v1/parcels/mine
GET /api/v1/parcels/:id/track


🚚 Agent APIs
GET /api/v1/agent/parcels
PATCH /api/v1/agent/parcels/:id/status
PATCH /api/v1/agent/parcels/:id/coordinates


🛠️ Admin APIs
GET /api/v1/admin/metrics
GET /api/v1/admin/users
PATCH /api/v1/admin/parcels/:id/assign
GET /api/v1/admin/parcels
GET /api/v1/admin/export/csv


🔐 Middleware
- Auth Middleware (protect route using JWT)
- Role-based Middleware (Admin, Customer, Agent)
