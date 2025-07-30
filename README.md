# 🚚 Courier and Parcel Management System - Backend

This is the **Backend API** for the MERN Stack Assignment on a Courier and Parcel Management System.

> ✅ Assignment for Internship - 6sense Technologies

---

## 🌐 Live Server

`http://your-backend-link.onrender.com`

---

## 📁 Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Role-based Access Control (RBAC)
- Postman (for API testing)
- Nodemon

---

## 👥 User Roles

- **Admin**
- **Delivery Agent**
- **Customer**

---

## 🔐 Auth APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register user with role |
| POST | `/api/v1/auth/login` | Login and receive token |

---

## 📦 Parcel APIs (Customer)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/parcels` | Book a parcel |
| GET | `/api/v1/parcels/mine` | View own parcel history |
| GET | `/api/v1/parcels/:id/track` | Track parcel (geo-coordinates) |

---

## 🚛 Delivery Agent APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/agent/parcels` | View assigned parcels |
| PATCH | `/api/v1/agent/parcels/:id/status` | Update parcel status |
| PATCH | `/api/v1/agent/parcels/:id/coordinates` | Update location coordinates |

---

## 🧑‍💼 Admin APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/admin/overview` | Dashboard analytics |
| PATCH | `/api/v1/admin/parcels/:id/assign` | Assign agent to parcel |
| GET | `/api/v1/admin/users` | View all users |
| GET | `/api/v1/admin/parcels` | View all parcels |
| GET | `/api/v1/admin/reports/export` | Export parcel data (CSV) |

---

## 🛡️ Role-Based Access Middleware

- `protect`: Checks JWT token
- `authorizeRoles('role')`: Restricts route based on role

---

## 📬 Test Data Example

```json
POST /api/v1/parcels
Authorization: Bearer <token>
{
  "pickupAddress": "Mirpur, Dhaka",
  "deliveryAddress": "Banani, Dhaka",
  "parcelSize": "medium",
  "parcelType": "Documents",
  "paymentType": "cod",
  "codAmount": 200
}
