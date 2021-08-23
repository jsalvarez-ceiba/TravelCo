pipeline{
  agent {
     label 'Slave_Induccion'
  }
  stages{
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Checkout'){
        steps{
        echo "------------>Checkout<------------"
        checkout([
        $class: 'GitSCM', 
        branches: [[name: '*/main']], 
        doGenerateSubmoduleConfigurations: false, 
        extensions: [], 
        gitTool: 'Default', 
        submoduleCfg: [], 
        userRemoteConfigs: [[
        credentialsId: 'GitHub_jsalvarez-ceiba', 
        url:'https://github.com/jsalvarez-ceiba/TravelCo.git'
        ]]
        ])
      }
      }
      stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Static Code Analysis') {
      steps{
          echo '------------>Análisis de código estático<------------'
          withSonarQubeEnv('Sonar') {
            sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner" 
          }
        }
      }
  }
  post{
    failure {
        echo 'This will run only if failed'
        mail (to: 'sebastian.alvarez@ceiba.com.co', subject: "Failed Pipeline:${currentBuild.fullDisplayName}",body: "Something is wrong with ${env.BUILD_URL}")

    }
  }
}
