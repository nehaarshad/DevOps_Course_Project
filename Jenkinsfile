pipeline {
    agent any

    environment {
        DOCKER_IMAGE    = "nehaarshad/devops_project_app"
        DOCKER_TAG      = "latest"
        RAILWAY_PROJECT = "577c7468-27b1-45bf-bd3e-51a1323c1879"
        RAILWAY_SERVICE = "9ab78a05-cd3c-4e7e-a83a-0e9d900730e3?environmentId=b82aa0ea-605b-4a9b-ac01-bd0dfccf6ca8"
    }

    stages {

        stage('Stage 1: Pull Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/nehaarshad/DevOps_Course_Project'
            }
        }

        stage('Stage 2: Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
            }
        }

        stage('Stage 3: Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'nehaarshad',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh "docker logout"
                }
            }
        }

        stage('Stage 4: Deploy to Railway') {
            steps {
                withCredentials([string(
                    credentialsId: 'railwayToken',
                    variable: 'RAILWAY_TOKEN'
                )]) {
                     sh """
                curl -s -X POST https://backboard.railway.app/graphql/v2 \
                -H "Content-Type: application/json" \
                -H "Authorization: Bearer ${RAILWAY_TOKEN}" \
                -d '{"query":"mutation { serviceInstanceRedeploy(environmentId: \\"YOUR_ENV_ID\\", serviceId: \\"YOUR_SERVICE_ID\\") }"}' 
            """
                }
            }
        }
    }

    post {
        success {
            echo 'All stages passed! Image pushed and Railway redeployed.'
        }
        failure {
            echo 'Pipeline failed. Check the console output above.'
        }
    }
}
