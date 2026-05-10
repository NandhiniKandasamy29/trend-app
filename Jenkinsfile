pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/NandhiniKandasamy29/trend-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nandhini209/trend-app:v1 .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push nandhini209/trend-app:v1'
            }
        }
    }
}
