# NodeJS with Express

Express is one of the most popular NodeJS backends frameworks in the world. It's a simple library to provide basic http routing. 
To learn more about express click [here](https://expressjs.com/).

## Requirements

There are no special requiremenst to deploy the application to cloud foundry. Everything needed will be handled in the description below.  

## Preparation.

1. Enable your Trial Instance of SAP Cloud Platform via https://cockpit.hanatrial.ondemand.com/trial/#/home/trial
2. Once your trial instance is ready enable cloud foundry an create a space if not yet available
3. Goto to Subscriptions within your subaccount an enable the "SAP Business Application Studio"
4. Open the SAP Business Application Studio via "Go to Application"
5. Click on "Create Dev Space" enter a "Dev Space name" and select "SAP Cloud Business Application". Finish the creation by clicking "Create Dev Space"
6. Once your space is ready open it and select "Clone from Git" from the Welcome page to clone the following repository: https://github.com/akrausesap/kyma-emoji.git
7. Click on "Open Workspace" and select kyma-emoji and open it. 
7. Open the manifest file in the cf-nodejs folder. Change the following values:
    1. Line 3 name --> e.g. add your name as pre- or suffix as it needs to be unique in the landscape
    2. Line 7 name --> e.g. add your name as pre- or suffix as it needs to be unique in the landscape
    3. Line 8 host --> e.g. use the same name as in Line 7
    3. Line 16 Destination url --> the application name must be the same than in line 3
8. Open a terminal via Ctrl+Ö or Terminal-->New Terminal
9. Logon to your Trial Instance via cf login (API Endpoint: https://api.cf.eu10.hana.ondemand.com)
10. Navigate to the cf-nodejs subfolder via "cd cf-nodejs"
11. Create the neccessary service instances: 
    1. Authorization Service: "cf cs xsuaa application emojicf-uaa -c ./security/xs-security.json"
    2. Application Log: "cf cs application-logs lite emojicf-al"
12. Deploy the application using "cf push"
13. Open the cloud Cockpit: https://cockpit.hanatrial.ondemand.com/
14. Goto to your Cloud Foundry space you should see two applications, select the application router (the one having the apr in the appname or whatever you entered in the manifest Line 7) and open the displayed route. 
14. Enter a name and hit emojify :-)
