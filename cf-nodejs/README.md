# Cloud Foundry version of the emojify application

This is a the nodejs variant of the emojify application adapted to be deployed on Cloud Foundry.
In this tutorial, you will deploy the existing application on Cloud Foundry running within the SAP Business Technology Platform.

## Requirements

There are no special requirements to deploy the application to Cloud Foundry. Everything needed will be handled in the description below.  

## Preparation

In general, there are two ways to complete this short hands-on exercise.
Either via the Business Application studio in the web (Option A), or via git and the command line on your local machine (Option B).

0. Create a SAP account on https://www.sap.com/account.html if you do not yet have one. If you need additional guidance, please follow this tutorial: https://developers.sap.com/tutorials/hcp-create-trial-account.html
1. Enable your trial instance on the SAP Business Technology Platform via https://cockpit.hanatrial.ondemand.com/trial/#/home/trial
2. Once your trial instance is ready, enter the subaccount "trial" which should be there already. (If it is missing, create a subaccount and enable Cloud Foundry for it.)

#### Option A: Business Application Studio

3. Go to the subscriptions within your subaccount. [ If SAP Business Application studio is not yet available, enable the "SAP Business Application Studio" (via the Create Button in the top right corner).]
4. Open the SAP Business Application Studio by clicking on the link under subscriptions (or click "Go to Application", if you just added the subscription).
5. Click on "Create Dev Space" enter a "Dev Space name" that you like (e.g. emojify-dev-space) and select "Full Stack Cloud Application" as kind of application. Finish the creation by clicking "Create Dev Space"
6. Once your space is ready open it and select "Clone from Git" from the welcome page. Enter the following URL to clone the repository: https://github.com/akrausesap/kyma-emoji.git
7. Click on "Open Workspace" and select kyma-emoji and open it. 
7. Open the `manifest.yml` file in the cf-nodejs folder. Change the following values:
    1. Line 3 name -->  change the name to be uniqe, e.g. add your name and a random number to the end of the existing application name. The application name needs to be unique (for all users). *Warning: do not use underscores.* A good example is emojicfjohndoe1337 ( but please do not use that, it is already taken. ;-) )
    2. Line 9 name --> same as in line 3, the name of the app router has to be unique. For example, once more add your name and a number to the existing name, so that it looks like this: emojicfaprjohndoe1337
    3. Line 17 url --> the part after "https://" has to match your application name in line 3, so in our example case the full URL looks as follows: "https://emojicfjohndoe1337.cfapps.eu10.hana.ondemand.com"
8. Open a terminal via the Menu at the top border: Terminal --> New Terminal
9. Type `cf login` to log on to your BTP Trial Instance (enter your matching API Endpoint for the region you chose when creating your account, e.g. https://api.cf.eu10.hana.ondemand.com for EU)
10. Navigate to the cf-nodejs subfolder via `cd cf-nodejs`
11. Create the neccessary service instances: 
    1. Create the Authorization Service by typing:     `cf cs xsuaa application emojicf-uaa -c ./security/xs-security.json`
    2. Create the Application Log Service by typing:   `cf cs application-logs lite emojicf-al`
12. Deploy the application by typing                   `cf push`
13. Open the cloud cockpit in your browser: https://cockpit.hanatrial.ondemand.com/
14. Go to to your Cloud Foundry space. You should see two applications. Select the application router (the one having the apr in the app-name, the name that you entered in the `manifest.yml` in Line 9) and open the displayed route in the browser (Hint: do not click on the link, but copy it into the address bar of a browser, as it is not correctly linked by default). 
15. Enter a name and hit emojify :-)

##### Option B: Cloud Foundry CLI, a local git client and the command line

(you need  the Cloud Foundry cli, a git client and an editor. The installation instructions for the Cloud Foundry CLI can be found here: https://docs.cloudfoundry.org/cf-cli/install-go-cli.html)

3. Open your command line, go to a folder of your liking and clone the project repository via `git clone https://github.com/akrausesap/kyma-emoji.git`
4. Navigate to the cf-nodejs folder and change the `manifest.yml` file as follows:
    1. Line 3 name -->  change the name to be uniqe, e.g. add your name and a random number to the end of the existing application name. The application name needs to be unique (for all users). Warning: do not use underscores. A good example is emojicfjohndoe1337 ( but please do not use that, it is already taken. ;-) )
    2. Line 9 name --> same as in line 3, the name of the app router has to be unique. For example, once more add your name and a number to the existing name, so that it looks like this: emojicfaprjohndoe1337
    3. Line 17 url --> the part after "https://" has to match your application name in line 3, so in our example case the full URL looks as follows: "https://emojicfjohndoe1337.cfapps.eu10.hana.ondemand.com"
5. Log into your BTP Trial Instance via `cf login`. As above, use your matching API endpoint, username and password.
6. Navigate to the cf-nodejs folder and run
    1. `cf cs xsuaa application emojicf-uaa -c ./security/xs-security.json`
    2. `cf cs application-logs lite emojicf-al`
    3. `cf push`
7. Open the cloud cockpit in your browser: https://cockpit.hanatrial.ondemand.com/
8. Go to to your Cloud Foundry space. You should see two applications. Select the application router (the one having the apr in the app-name, the name that you entered in the manifest.yml in Line 9) and open the displayed route in the browser (Hint: do not click on the link, but copy it into the address bar of a browser, as it is not correctly linked by default). 
9. Enter a name and hit emojify :-)
