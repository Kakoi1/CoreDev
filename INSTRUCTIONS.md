Setup the  Project 
1. git clone https://github.com/Kakoi1/CoreDev.git
2. go to the project directory then type this 'composer install'
	to use composer you must install composer, link for composer 	'https://getcomposer.org/download/' you will see a color blue words Composer-	Setup.exe click it to download then here is a youtube video to setup composer 	'https://www.youtube.com/watch?v=HBDJsc2cXR4'
3. after that type 'cd CoreDev-Frontend'
4. then type 'npm install' 
5. and then go back to the main directory of the project and open xampp application
6. go to http://localhost/phpmyadmin/ and create a database 'coredev'
7. go back to the project in the main directory type 'php artisan migrate'
8. and after that type 'php artisan serve'
9. and then type again 'cd CoreDev-Frontend'
11. and type 'npm run dev'

Incase of MYSQL error encounter 
1. Add  ".env" file inside the CoreDev-Frontend folder 
2. copy and paste this code inside the file 
   VITE_API_KEY="google map Api here"
   VITE_APP_URL=http://localhost:8000/
3. and type 'npm run dev'again



 
