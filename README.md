
# Software Solutions Website

This is a modern website that offers a range of software, hardware, and cloud-based solutions for businesses. It showcases different types of technology services and products, built using a full-stack approach with React (frontend), Laravel (backend), and MySQL (database).


---

## 🌐 Overview

This web application showcases a range of dynamic software products and services. It features:

- 💻 **Software Products** – Custom business applications and tools  
- 🖥️ **Hardware Products** – Enterprise-grade hardware offerings  
- ☁️ **Cloud Solutions** – Scalable cloud-based infrastructure and services

---

## 🛠 Tech Stack

- **Frontend**: React.js  
  - [React Query](https://tanstack.com/query/latest) – For API data fetching and caching  
  - [Zod](https://zod.dev/) – For schema-based form validation  
- **Backend**: Laravel (PHP)  
- **Database**: MySQL

---

## 🚀 Features

- ⚙️ **Dynamic Product Listings**  
  Products are dynamically loaded from the backend using React Query. This includes:

  - 💻 Software Products  
  - 🖥️ Hardware Products  
  - ☁️ Cloud Solutions

- 📦 Feature-based frontend architecture  
- ✅ Form validation using Zod  
- 🔄 API data fetching and caching with React Query  
- 📱 Fully responsive and modern UI/UX design  
- 🔒 Secure backend with Laravel and MySQL  


---

## 📦 Project Structure(Feature-Based)
```
CoreDev/
├── CoreDev-Frontend/         # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── features/
│ │ | ├── feature/            #feature base
│ │ | | ├── components/
│ │ | | ├── lib/
│ │ | | ├── services/
│ │ | | ├── styles/
│ │ | | ├── index.js          
│ │ | | ├── shared/           # Feature that can be reused in other feature
| │ │ | | ├── components/
│ │ | | | ├── lib/
│ │ | | | ├── services/
│ │ | | | ├── styles/
│ │ | | | ├── index.js        
│ │ ├── pages/
│ │ ├── layout/
│ │ ├── routes/               # App routes
│ │ ├── lib/                  # API configs (React Query and axios config.)
├── app/                      # Core application backend code (Models, Controllers, etc.)
│   ├── Console/
│   ├── Exceptions/
│   ├── Http/
│   │   ├── Controllers/
│   │   | └── api/
│   │   | | └── ClientController.php
│   └── Models/
│   └── | ModelName.php
├── bootstrap/               # Framework bootstrap files
│   └── app.php
├── config/                  # Application configuration files
├── database/                # Migrations, seeders, and factories
│   ├── factories/
│   ├── migrations/
│   └── seeders/
├── public/                  # Publicly accessible files (index.php, assets)
├── resources/               # Views, Blade templates, raw assets (CSS, JS)
│   ├── js/
│   ├── css/
│   └── views/
├── routes/                  # Route definitions
│   ├── api.php
│   ├── web.php
│   └── console.php
├── storage/                 # Logs, compiled Blade files, file uploads
│   ├── app/
│   ├── framework/
│   └── logs/
├── .env                     # Environment configuration
├── .env.example             # Sample env config
├── artisan                  # Laravel CLI tool
├── composer.json            # PHP dependencies
├── package.json             # Node dependencies
├── phpunit.xml              # PHPUnit config
└── README.md                # Project documentation
```

---

## ⚙️ Installation Guide

> This project assumes you're using a local environment like XAMPP, Laragon, Valet, or Docker. Make sure to configure `.env` files in both frontend and backend.

### 🔧 Front end (React)

1. Clone the repository and navigate to the frontend directory:
   ```bash
   git clone https://github.com/Kakoi1/CoreDev.git
   cd CoreDev-Frontend
   ```

2. Install dependencies:
   ```bash
   npm i or npm install
   ```
  
3. Create a .env file and set your API base URL:
   ```bash
    VITE_API_KEY= api key
    VITE_APP_URL = localhost url
    VITE_ORANGE_PAYPLUS_URL=orange pay plus url,no slash at the end
   ```

4. Start the frontend development server:
   ```bash
    npm run dev
   ```


### 🔧 Backend (Laravel)

1. Clone the repository and navigate to the frontend directory:
   ```bash
   git clone https://github.com/Kakoi1/CoreDev.git
   ```

2. Install PHP dependencies:
   ```bash
   composer install(root directory)
   ```

3. Copy the .env.example to .env file and generate the application key:
   ```bash
    php artisan key:generate

   ```

4. run database migration:
    ``` 
    php artisan migrate

   ```

4. run database seeder:
    ``` 
    php artisan db:seed 
    ```

4.  start the development server:
    ``` 
    php artisan serve

    ```



