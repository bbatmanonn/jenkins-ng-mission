pipeline {
  agent any
  stages {
    stage('step1') {
      parallel {
        stage('step1') {
          steps {
            echo 'hello ng!'
          }
        }
        stage('step 2') {
          steps {
            echo 'hello ng 2!'
          }
        }
      }
    }
    stage('error') {
      steps {
        timestamps() {
          echo 'Complete!'
        }

      }
    }
  }
}