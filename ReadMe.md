Here’s a **README.md** file for setting up your API:

---

# 📌 **ITEMS API**

This is a simple API built using **Node.js**, **Express**, and **MongoDB**.

## 🚀 **Features**

- ✅ Add, Update, Delete, and Retrieve items.
- ✅ Uses **MongoDB Atlas** as the database.
- ✅ Simple and easy-to-use REST API.

---

## 🛠 **Setup Instructions**

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/classyie/API-test-1.git
cd API-test-1
```

### 2️⃣ **Install Dependencies**

```bash
npm install
```

### 3️⃣ **Set Up Environment Variables**

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection URI.

### 4️⃣ **Start the Server**

```bash
npm run dev
```

The server will start on **`http://localhost:5001`**.

---

## 📌 **API Endpoints**

### 📖 Get All Items

- **Method:** `GET`
- **URL:** `/api/items`
- **Response:**
  ```json
  [
    {
      "_id": "67a074663557ba95ca4f36a0",
      "item": "Item1",
      "createdAt": "2025-02-03T07:46:46.959Z",
      "updatedAt": "2025-02-03T07:46:46.959Z",
      "__v": 0
    }
  ]
  ```

### ➕ Add a New Item

- **Method:** `POST`
- **URL:** `/api/add`
- **Body:**
  ```json
  {
    "item": "Item To Be Added"
  }
  ```

### ✏️ Update an Item

- **Method:** `PUT`
- **URL:** `/api/update`
- **Body:**
  ```json
  {
    "_id": "IDofItem", //"_id": "67a0937dc883fff16338f476",
    "item": "ItemToBe Updated"
  }
  ```

### ❌ Delete an Item

- **Method:** `DELETE`
- **URL:** `/api/remove`
- **Body:**
  ```json
  {
    "_id": "unique_item_id" //"_id": "67a0937dc883fff16338f476",
  }
  ```

---

## 💡 **Technologies Used**

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Dotenv**

---

## 🛠 **Troubleshooting**

### 🚨 Common Errors

1. **MongoDB Connection Error**

   - Ensure your **MONGO_URI** is correct in `.env`.
   - Check if **MongoDB Atlas** is running and IP access is configured.

2. **Cannot set headers after they are sent**
   - Make sure you are sending only **one response per request**.

---

## 📞 **Support**

For issues, create a GitHub issue at [API-test-1 Issues](https://github.com/classyie/API-test-1/issues).

---