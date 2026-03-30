# 🗂️ Files-on-Cloud

[![Version](https://img.shields.io/badge/version-2.0.1-blue.svg)]()
[![License](https://img.shields.io/badge/license-MIT-green.svg)]()
[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

> A cloud file storage and sharing web application — upload, manage, and share files from any device.

**Live Demo:** https://files-on-cloud.onrender.com
⚙️(Note: The app may load slowly initially as the backend is hosted on Render free tier.)

---

## 🚀 What This Project Does

Files-on-Cloud is a full-stack web application that allows users to upload, store, manage, and share files securely over the cloud.

The project is structured as:
- **Frontend** → `public/` (HTML, CSS, JavaScript)
- **Backend** → `backend/` (Node.js, Express, MongoDB)

---

## ⭐ Why It’s Useful

- Centralized online file storage
- Access files from anywhere
- Simple UI with minimal configuration
- REST APIs for easy integration

## 🚀 Features

- 📤 File Upload – Upload files securely to the cloud
- 🔗 File Sharing – Generate shareable download links
- 📊 File Analytics – Track downloads, views, and usage statistics
- 🔐 JWT Authentication – Secure login/signup with token-based auth
- 🔗 Public Share Links – Access files without login via unique URLs
- 📷 QR Code Generator – Instantly generate QR codes for file sharing
- 🔒 File Password – Enable one extra security by adding password
- 🌐 Responsive UI – Clean and modern interface across devices

---

## 🧭 Getting Started

### 🛠️ Prerequisites

- Node.js (v14+)
- npm (v6+)

---

## 📥 Installation

```bash
git clone https://github.com/priyansh13-c/Files-on-Cloud.git
cd Files-on-Cloud
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
DATABASE_URL=your_database_url_here
JWT_SECRET=your_secret_key_here
```

---

## 📦 Frontend Setup

```bash
cd ../public
npm install
```

---

## ▶️ Run Locally

```bash
cd backend
npm start
```

```bash
cd public
npm start
```
---

## 🧪 Usage

```http
POST /api/files
GET /api/files
GET /api/files/:fileId
```

---
## 📁 Project Structure

```bash
File-on-Cloud/
│
├── backend/
│   ├── middleware/        # JWT auth, error handling
│   ├── models/            # Database schemas
│   ├── routes/            # REST API endpoints
│   ├── config/            # DB & app configuration (optional)
│   └── server.js          # Express server setup
│
├── public/                # Frontend static files
├── uploads/               # File storage (local)
│
├── .env.example           # Sample environment variables
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```
Screenshots
<img width="1881" height="1025" alt="image" src="https://github.com/user-attachments/assets/f7c12ebd-1a51-4168-83ac-27ee9786e8e9" />
<img width="1716" height="1061" alt="image" src="https://github.com/user-attachments/assets/8dd03d14-bad4-4604-ace9-691c00d61237" />
<img width="1147" height="827" alt="image" src="https://github.com/user-attachments/assets/263943d2-292a-49e0-979e-52cfcdcea203" />
<img width="1192" height="785" alt="image" src="https://github.com/user-attachments/assets/891d12cd-9722-475c-a658-e1719f9a1932" />
<img width="1151" height="593" alt="image" src="https://github.com/user-attachments/assets/0e791d16-4b8d-45d1-b9fa-0890897c349d" />

## 👩‍💻 Maintainers

- **Priyansh** — Project Author

---

## 📄 License

MIT License. See `LICENSE` file.
