# IIT - Monday Group 3 (Cloud ML Webapp Artifact)
Main repository: https://github.com/Ghost-Recon131/IIT-A3

# Cloud ML Webapp
## Running on Localhost
To run Webapp locally, use the following commands, then go to http://localhost:3000/
```shell
cd ml-webapp/

npm i

npm start
```


## Hosted Website
This website is also hosted on AWS using a custom domain with SSL certificate for HTTPS. Note I will likely take down the
AWS hosting following the release of results for Semester 1 2022 to avoid accidentally going beyond the AWS free tier limits. 

URL: https://reactfrontend.s3843790-cc.com/


## Dockerfile
The included Dockerfile is used to Dockerise the React app and prepare for AWS deployment. 

To do this on your computer, ensure docker is installed & running then run the following:

```shell
docker build -t mlwebapp .
```

To run the Docker image on your computer, use the following:
```shell
docker run -it -p  3000:3000 mlwebapp
```