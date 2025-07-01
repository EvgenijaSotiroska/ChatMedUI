# ChatMedUI

### Description
ChatMedUI is a React-based frontend module primarily focused on providing a smooth and intuitive interface for evaluating machine learning models. 
While the frontend handles the core user experience — including listing, viewing, and managing workspaces where models are evaluated — it is supported by a Spring Boot backend that manages server-side logic and data.

### Getting started
Install Docker Desktop and make sure it is running before proceeding.

Clone the repository:
git clone https://github.com/angelaangeleska/ChatMedUI

Navigate to the project directory:
cd ChatMedUI

Open the project in your preferred IDE (e.g., Visual Studio Code or IntelliJ IDEA).

Navigate to the backend directory:
cd backend

Build the backend using Maven, skipping tests:
./mvnw clean package -DskipTests

Return to the root project directory:
cd ..

Start all services (frontend, backend, and database) using Docker Compose:
docker compose up

Once all services are running, open your web browser and go to:
http://localhost:3000
