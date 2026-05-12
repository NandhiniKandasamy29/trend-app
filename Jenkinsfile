pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "nandhini209/trend-store-app:latest"
        AWS_REGION = "ap-south-1"
        EKS_CLUSTER = "trend-cluster
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/NandhiniKandasamy29/trend-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }

        stage('Connect to EKS') {
            steps {
                sh 'aws eks update-kubeconfig --region $AWS_REGION --name $EKS_CLUSTER'
            }
        }

        stage('Deploy to EKS') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'kubectl get pods'
                sh 'kubectl get svc'
            }
        }
    }
}