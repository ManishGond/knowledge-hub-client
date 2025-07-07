<h1 align="center">🧠 Knowledge Hub</h1>

<p align="center">
  A full-stack note-taking & knowledge management app built with React + TypeScript + Redux Toolkit on the frontend, and Express + MySQL + Prisma on the backend.
</p>

<p align="center"> 
  <img src="https://github.com/user-attachments/assets/f20f176c-fe03-4b21-90e7-7bb2b3c992c1" width="600" alt="Screenshot 1" /> 
  <br/><br/> 
  <img src="https://github.com/user-attachments/assets/5dab4c83-6a17-4ac8-bf2a-c75456b96e04" width="600" alt="Screenshot 3" /> 
</p>

---

## 🚀 Features

* ✅ Add / Edit / Delete Notes
* 💾 Persistent storage with MySQL + Prisma
* 🔁 Global state with Redux Toolkit
* ⚛️ Functional components with React Hooks
* 🧪 Unit tested with Jest + React Testing Library
* ⚙️ Optimized with `useMemo`, `React.memo`, `useCallback`

---

## ⚙️ Tech Stack

| Frontend              | Backend            | Dev Tools / Testing      |
| --------------------- | ------------------ | ------------------------ |
| React 19 + TypeScript | Node.js + Express  | Jest + React Testing Lib |
| Redux Toolkit         | MySQL + Prisma ORM | ESLint + Prettier        |
| React Router DOM v6   | RESTful API (CRUD) | Dotenv + Nodemon         |

---

## 📁 Folder Structure

```
knowledge-hub/
├── client/                   # React frontend
│   ├── public/               # Static assets (favicon, index.html, images)
│   └── src/                  # Source code
│       ├── api/              # API service layer (Axios/fetch)
│       ├── components/       # Reusable UI components
│       ├── hooks/            # Custom React hooks
│       ├── pages/            # Page-level components (e.g. Dashboard, Home)
│       ├── redux/            # Redux slices and store config
│       ├── types/            # Global TypeScript types/interfaces
│       ├── App.tsx           # Root component
│       └── main.tsx          # App entry point
│
├── server/                   # Node.js backend
│   └── src/
│       ├── controllers/      # Business logic for routes
│       ├── prisma/           # Prisma schema & client
│       ├── routes/           # Route definitions
│       └── index.ts          # Server entry point
│   ├── .env                  # Environment variables
│   └── package.json          # Backend dependencies & scripts
│
├── README.md                 # Project overview
└── .gitignore                # Ignored files in git
```


---

## 🧪 Running the App

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/knowledge-hub.git
cd knowledge-hub
cd server
npm install
npx prisma generate
npx prisma migrate dev
npm run dev

cd client
npm install
npm start
```

### 🖼️ Screenshots

### 🧠 Dashboard View

<img src="https://github.com/user-attachments/assets/667d4810-9399-44ed-871f-ea582cc639ae" width="600" alt="Screenshot 2" /> 

### 🧪 Testing

```bash
# From /client
npm test
```

### ✅ Test Coverage Includes:

* Reducer logic tests
* Component rendering tests (NoteCard)
* Event testing (onEdit, onDelete)
* Async thunk testing (optional)
---

## 🙌 Author

**Made with 💻 by Manish Gond**
Full-stack dev in the making — mastering system design, frontend performance, and API architectures 🔥

---

## 📜 License

This project is licensed under the **MIT License**.
