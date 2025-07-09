# 📚 Node.js Book Directory API

A **simple Node.js + Express REST API** to manage a **Book Directory** with CRUD operations:
- **Add, Read, Update, Delete books** using clean REST endpoints.
- Easy to extend with MongoDB or validation libraries for learning and portfolio building.

---

## 🚀 Features

✅ REST API using Express  
✅ CRUD operations for books  
✅ Modular routing with controllers  
✅ Ready for Postman/Thunder Client testing  

---

## 🛠️ API Endpoints

| Method | Route | Description |
| ------ | ----- | ----------- |
| GET | `/` | Get all books |
| POST | `/` | Add a new book |
| PUT | `/` | Update an existing book |
| DELETE | `/` | Delete a book |

---

## 📦 Request & Response

### ➡️ Add a Book
- **POST** `/`
- **Body (JSON)**:
```json
{
  "title": "The Alchemist",
  "authorName": "Paulo Coelho",
  "year": 1988,
  "category":"Political"
}

