# Trend App - DevOps Project

## Project Overview

This project demonstrates a complete DevOps workflow using React, Docker, Jenkins, Terraform, Kubernetes, and AWS EKS. The application is containerized using Docker, automated through Jenkins CI/CD pipeline, and deployed on Kubernetes using AWS EKS.

---

# Technologies Used

* React JS
* Docker
* Jenkins
* GitHub
* Terraform
* Kubernetes
* AWS EC2
* AWS EKS
* Docker Hub

---

# Project Architecture

GitHub → Jenkins Pipeline → Docker Build → Docker Hub → Kubernetes Deployment on AWS EKS

---

# Step 1: Clone Repository

```bash
git clone https://github.com/NandhiniKandasamy29/trend-app.git
cd trend-app
```

---

# Step 2: Install Dependencies

```bash
npm install
```

---

# Step 3: Run Application Locally

```bash
npm start
```

Application runs on:

```bash
http://localhost:3000
```

---

# Docker Setup

## Build Docker Image

```bash
docker build -t trend-app .
```

## Run Docker Container

```bash
docker run -d -p 3000:3000 trend-app
```

---

# Push Docker Image to Docker Hub

```bash
docker tag trend-app nandhini209/trend-app:v1
docker push nandhini209/trend-app:v1
```

Docker Hub Image:

```bash
nandhini209/trend-app:v1
```

---

# Terraform Infrastructure Setup

Terraform was used to create:

* VPC
* Subnet
* Security Group
* EC2 Instance for Jenkins

## Terraform Commands

```bash
terraform init
terraform plan
terraform apply
```

---

# Jenkins Setup

Jenkins was installed on AWS EC2 instance.

## Jenkins Pipeline Stages

1. Clone GitHub Repository
2. Build Docker Image
3. Push Docker Image to Docker Hub
4. Deploy to Kubernetes

---

# Kubernetes Deployment

## Deploy Application

```bash
kubectl apply -f deployment.yaml
```

## Create Service

```bash
kubectl apply -f service.yaml
```

## Verify Pods

```bash
kubectl get pods
```

## Verify Services

```bash
kubectl get svc
```

---

# EKS Cluster Creation

```bash
eksctl create cluster \
--name trend-cluster \
--region ap-south-1 \
--nodegroup-name workers \
--node-type t3.medium \
--nodes 2
```

---

# Application Access

The application is exposed using Kubernetes LoadBalancer service.

Access application using:

```bash
http://a66e5d74f2f254e8a9fd52c7fb6bd902-173048449.ap-south-1.elb.amazonaws.com/
```

---

# Jenkinsfile Pipeline

The Jenkins pipeline automates:

* Docker image build
* Docker image push
* Kubernetes deployment

---

# Screenshots Included

* Jenkins Dashboard
* Successful Jenkins Pipeline
* Docker Build
* Kubernetes Pods
* Kubernetes Services
* EKS Cluster
* Application Output

---

# Author

Nandhini Kandasamy
