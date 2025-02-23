# 📚 Book Directory Management System  

## 📌 Project Overview  
This is my first mini-project using **Node.js**, built to practice backend development. The project focuses on developing a **Book Directory Management System**, including:  
- **User Management** (Registration, Authentication, Role-based Access)  
- **Book Management** (CRUD operations on books)  
- **Author Details** (Managing book authors)  

The backend is developed using **Express.js**, with **PostgreSQL/MySQL** as the database.  

---

## 🏗️ Initial Project Structure *(Subject to Change)*  

The project structure may evolve as the development progresses. Below is an initial model:  

```
/book directory                   # Project folder
  |-- src                         # Source code
  |   |-- server.js               # Main entry point of the backend
  |   |-- routes                        
  |   |   |-- index.js            # Main router file
  |   |   |-- userRoutes.js       # Routes for user-related operations
  |   |   |-- bookRoutes.js       # Routes for book-related operations
  |   |   |-- authorRoutes.js     # Routes for author-related operations
  |   |-- controllers                    
  |   |   |-- userController.js   # Handles user-related logic
  |   |   |-- bookController.js   # Handles book-related logic
  |   |   |-- authorController.js # Handles author-related logic
  |   |-- models                        
  |   |   |-- userModel.js        # Defines User schema
  |   |   |-- bookModel.js        # Defines Book schema
  |   |   |-- authorModel.js      # Defines Author schema
  |   |-- config
  |   |   |-- database.js         # Database connection configuration
  |   |-- middlewares
  |   |   |-- authMiddleware.js   # Middleware for authentication and authorization
  |-- .env                        # Environment variables
  |-- package.json                 # Project dependencies and scripts

```

**⚠️ Note:** The structure may be updated as the project grows or may differ. This is only for initial reference.

---

## 🚀 Features  
✔️ User Authentication (Login, Signup, JWT-based Authentication)  
✔️ CRUD operations for Books  
✔️ CRUD operations for Authors  
✔️ Role-based access control  
✔️ Database integration with PostgreSQL/MySQL  

---

## 🛠️ Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Raviraagul/My-Node-Project.git
cd "Book Directory"
```

### 2️⃣ Install Dependencies  
```bash
npm install
```

### 3️⃣ Configure Environment Variables  
Create a `.env` file in the root directory and add your database credentials, JWT secret, and other configuration settings. Example:  
```
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=book_directory
JWT_SECRET=your_jwt_secret_key
```

### 4️⃣ Run the Server  
```bash
npm start
```
or with Nodemon for live reloading:  
```bash
npm run dev
```

---

## 🛠️ Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL / MySQL  
- **Authentication:** JWT  
- **Middleware:** Express Middleware, Authentication Middleware  

---

## 🤝 Contributing  
As this is my learning project, any suggestions or improvements are welcome! Feel free to fork this repository, raise issues, or submit pull requests.  

---

## 📞 Contact  
For any queries or suggestions, reach out to me via GitHub: [@Raviraagul](https://github.com/Raviraagul)  
