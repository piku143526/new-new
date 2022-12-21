pipeline {
  agent any
    
    
  stages {
        
    stage('Git Checkout SCM') {
      steps {
         git url: 'https://github.com/piku143526/React-Native.git', branch: 'main'
                // Change file permisson
                //sh "chmod +x -R ./jenkins"
                // Run shell script
                //sh "./jenkins/script/scripted_pipeline_ex_2.sh"
      }
    }
     
    stage('android') {
        steps {
          //sh 'cd $react-native\ProjectName'
          sh 'npm install'
          sh 'react-native run-android'
        }
    }

    stage('iso') {
      steps {
        sh 'react-native run-ios'
      }
    }  
    
    stage('start') {
      steps {
        sh 'react-native start'
      }       
    }

    stage('test') {
      steps {
        sh 'jest'
      }       
    }

    stage('lint') {
      steps {
        sh 'eslint'
      }       
    }
  }
}
