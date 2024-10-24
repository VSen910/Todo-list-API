pipeline {
    agent any

    stages {
        stage('Pre-build') {
            agent {
                docker {
                    image 'node:20'
                    reuseNode true
                }
            }
            steps {
                sh '''
                node --version
                npm --version
                npm ci
                '''
            }
        }

        stage('Build') {
            agent {
                docker {
                    image 'maven'
                    reuseNode true
                }
            }
            steps {
                sh '''
                mvn clean package
                '''
            }
        }

        // stage('Test') {
        //     agent {
        //         docker {
        //             image 'node:20'
        //             reuseNode true
        //         }
        //     }
        //     steps {
        //         sh '''
        //         npm test
        //         '''
        //     }
        // }
    }
}