🍽 Meal Planner Application

A full-stack Meal Planner web application built using React (Frontend) and Node.js + Express (Backend), containerized using Docker and deployable with Kubernetes.

This project demonstrates end-to-end development + deployment workflow, making it ideal for learning DevOps, Cloud, and Microservices architecture.

📁 Project Structure
meal-planner-app/
│
├── frontend/                 # React-based UI
│   ├── src/                 # Application logic
│   ├── public/              # Static files
│   ├── Dockerfile           # Frontend container config
│   └── package.json         # Frontend dependencies
│
├── backend/                 # Node.js + Express API
│   ├── src/                # Server & routes
│   ├── Dockerfile          # Backend container config
│   └── package.json        # Backend dependencies
│
├── Below files                    # Kubernetes manifests
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│
├── docker-compose.yml      # Multi-container local setup
└── README.md               # Project documentation

⚙️ Tech Stack
Frontend
React
Html, js

Backend
Node.js
Express.js

DevOps & Deployment
Docker
Docker Compose
Kubernetes

🔄 Application Workflow
1️⃣ User Interaction
User accesses the React frontend
UI allows:
Viewing meals
Adding new meals
Deleting meals

2️⃣ Frontend → Backend Communication
Frontend sends API requests using Axios
Example endpoints:
GET /meals → Fetch meals
POST /meals → Add meal
DELETE /meals/:id → Delete meal

3️⃣ Backend Processing
Express server handles API requests
Stores meal data (currently in-memory)
Sends JSON responses back to frontend

4️⃣ Containerization (Docker)
Each service runs in its own container:
Frontend → Port 3000
Backend → Port 5000
Defined using:
Dockerfile (per service)
docker-compose.yml (multi-service setup)

5️⃣ Kubernetes Deployment
Backend
Deployed using:
backend-deployment.yaml
backend-service.yaml
Internal service (ClusterIP) for communication
Frontend
Deployed using:
frontend-deployment.yaml
frontend-service.yaml

AWS DynamoDB
Table: MealPlanner
Primary Key: id (String)
Serverless NoSQL DB
Amazon Elastic Kubernetes Service (EKS) → Run Kubernetes
Amazon Elastic Container Registry (ECR) → Store Docker images

Minikube (Local Cluster)
minikube start
# Enable Docker inside Minikube
eval $(minikube docker-env)

# Build images inside Minikube
docker build -t meal-backend ./backend
docker build -t meal-frontend ./frontend

# Deploy to Kubernetes
kubectl apply -f k8s/

# Access frontend
minikube service meal-frontend-service

In Kubernetes:

Frontend Pod → Backend Service → Backend Pod

🚀 Getting Started
🔹 Run Locally (Without Docker)
Backend
cd backend
npm install
npm start
Frontend
cd frontend
npm install
npm start

🔹 Run with Docker
docker-compose up --build

🔹 Deploy to Kubernetes
kubectl apply -f k8s/

🌟 Features
Add and delete meals
REST API integration
Fully containerized
Kubernetes deployment ready
Clean modular architecture

🔮 Future Enhancements
Add MongoDB database
User authentication (JWT)
AI-based meal recommendations
CI/CD pipeline (GitHub Actions)
