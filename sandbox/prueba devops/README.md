Este proyecto demuestra un pipeline completo de CI/CD para una app demo en Node.js, usando Docker, Kubernetes (Kind) y GitHub Actions.

---

## 🧩 Tecnologías usadas

- Node.js (Express)
- Docker
- Kubernetes (Kind)
- GitHub Actions

---

## 📦 Requisitos previos

Antes de comenzar asegúrate de tener instalado:

- Docker Desktop
- Node.js
- Git
- kubectl
- Kind

Verifica con:

```bash
docker --version
node -v
git --version
kubectl version --client
kind version
```

---

## 🛠️ Estructura del proyecto

```
prueba-devops/
├── app/
│   ├── index.js
│   └── package.json
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── secret.yaml
├── .github/
│   └── workflows/
│       └── deploy.yml
├── Dockerfile
├── .dockerignore
└── README.md
```

---

## 🚀 Instrucciones paso a paso

### 1. Clona el repositorio

```bash
git clone <URL_DEL_REPO>
cd prueba-devops
```

### 2. Instala dependencias

```bash
cd app
npm install
cd ..
```

### 3. Construye la imagen Docker

```bash
docker build -t node-app .
```

### 4. Prueba la app en Docker

```bash
docker run -p 3000:3000 node-app
# Luego visita: http://localhost:3000/health
```

### 5. Crea un cluster Kind

```bash
kind create cluster --name devops-challenge
```

### 6. Carga la imagen al cluster

```bash
kind load docker-image node-app --name devops-challenge
```

### 7. Crea el namespace y aplica los manifiestos

```bash
kubectl create namespace devops-challenge
kubectl apply -f k8s/ -n devops-challenge
```

### 8. Verifica el despliegue

```bash
kubectl rollout status deployment/node-app -n devops-challenge
```

### 9. Expón el servicio y accede al endpoint

```bash
kubectl port-forward svc/node-app-service 8080:80 -n devops-challenge
```

Visita en el navegador:

```
http://localhost:8080/health
```

---

## ✅ Endpoint

```http
GET /health → { "status": "ok" }
```

---

## 🔁 GitHub Actions Workflow

Ubicado en `.github/workflows/deploy.yml`, el pipeline incluye:

- Checkout del código
- Build de imagen Docker
- Despliegue en Kubernetes Kind
- Validación con `kubectl rollout` y `curl /health`

---

## ✨ Autor

Edward – DevOps Jr.  
Prueba técnica automatizada con Docker, Kubernetes y GitHub Actions.
