pipeline {

  agent { docker { image 'node:lts' } }

  stages {

    stage('Build') {
      steps {
        sh 'rm -rf node_modules dist'
        sh 'npm ci'
      }
    }

    stage('Publish PR Version') {
      when { changeRequest() }
      environment {
        PR_VERSION="PR-$env.CHANGE_ID"
      }
      steps {
        withCredentials([[
          $class: 'AmazonWebServicesCredentialsBinding',
          credentialsId: 'ia-tools-jenkins-myuw-s3'
        ]]) {
          sh 'ARTIFACT_VERSION="$PR_VERSION" node publish.js'
          sh 'ARTIFACT_VERSION="unstable" node publish.js'
        }
      }
    }

    stage('Publish Release Version') {
      when { branch 'master' }
      steps {
        withCredentials([[
          $class: 'AmazonWebServicesCredentialsBinding',
          credentialsId: 'ia-tools-jenkins-myuw-s3'
        ]]) {
          sh 'node publish.js'
          sh 'ARTIFACT_VERSION="latest" node publish.js'
        }
      }
    }

    stage('Tag Distributable') {
      when { branch 'master' }
      environment {
        VERSION=sh(script: '''node -p "require('./package.json').version"''', returnStdout: true).trim()
     }
      steps {
        sh 'git add dist --force'
        sh 'git commit -m "Tagging v$VERSION-dist for $VERSION"'
        sh 'git tag v$VERSION-dist'
        sh 'git push --tags'
        sh 'git checkout -B gh-pages'
        sh 'git push gh-pages --force'
      }
    }

    stage('Publish to NPM') {
      when { branch 'master' }
      steps {
        sh 'npm publish'
      }
    }

  }

}
