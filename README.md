# dot-net-core-spa
This repository contains a reference architecture for an Angular 4 SPA, hosted separately from an API, authenticated against Azure AD. This is meant to be a quickstart template for faster and more consistent builds.

## Stack
These applications built to be hosted separately to promote scalability and deployment independence. The Client application communicates with the API application via CORS across domains. Authentication is handled by the Angular application, which passes a bearer token to the API application. The basic stack is as follows:

- Client (Web) application
    - Angular 4 (via Angular CLI)
    - .NET Core 2.0 Preview 1
- API application
    - .NET Core 2.0 Preview 1
    - .NET Standard 2.0 Preview 1 dependency (Application project)
    - Azure AD
- Azure ARM Deployment Templates

Both applications force SSL (even locally) due to requirements from Azure AD. Make sure when you set up your AD application you add the proper reply URLs for the Web app only.

This repository is currently hosted at:
- Angular 4 app: https://dot-net-core-web-qa.azurewebsites.net/
- API app: https://dot-net-core-api-qa.azurewebsites.net/

## Debugging locally
Note: I have not tested this on Mac/Linux, but it should run cross-platform if you have dotnet 2.0 installed. Instructions here are for Windows 10.

### API application
This project is built to run on SSL locally at https://localhost:44332/ (on Windows). While developing the Web app, I like to run the API project without debugger from VS 2017 (CTRL+F5). While developing the API project, running with debugger might make sense.

### Client (Web) application
This project is also built to run on SSL but using the Angular CLI's `ng serve --ssl` command. `npm start` is also set up to work. Either command will launch the site at https://localhost:4200 [note: this is a reply URL] with hot reload. Since Angular CLI circumvents .NET Core, it's a good idea to test it before deploying. Run `ng build` and run the Web project without debugger - it will launch at https://localhost:44326 [note: this is a reply URL].

## Deployment

### API application
Typical web deploy, nothing special to note.

### Client (Web) application
The difference worth noting here is that the web deploy will push the /wwwroot directory, which is the target of the Angular CLI build. Prior to deploying using web deploy, run either `ng build --env=qa` or `npm run build-qa` and then run web deploy. If you're using VSTS + Build/Release, make sure to include this step prior to building the project and creating the artifacts package.

### Azure ARM Templates
Edit the Deploy-AzureResourceGroup.ps1 file, ideally in PowerShell ISE. Update with your subscription ID at the line `Login-AzureRmAccount -SubscriptionId '[subscription-id]'`. Once that's loaded, run the file, passing either "qa" or "prod" as environment parameters when prompted - those will reference the relevant azuredeploy.[env].parameters.json file as your deployment parameters. This template deploys a Free App Service Plan with a QA and Prod site for each Web+API app.