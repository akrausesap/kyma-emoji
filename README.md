# Tutorial

## Project Description
This is a sample project that will be used to introduce the SAP Cloud Platform Kyma Runtime to you. It shows you how to build a sample application in PHP, Python and node.js. Furthermore it shows how to consume the Application API (Constant accross all 3 languages) on a React frontend. 

All of this is deployed to the "Cloud" using Kubernetes based [Kyma](https://kyma-project.io/) as a runtime.

## Requirements
To leverage these samples we have tried to minimize the software installation requirements by providing you with a virtual machine with all needed tools installed. Hence all you need is a "player" to execute the image on your laptop. We propose to use the available tooling of VMWare. To install them follow the below links for your respective OS and install according to instructions:

   1. Mac: https://my.vmware.com/web/vmware/evalcenter?p=fusion-player-personal
   2. Windows: https://my.vmware.com/en/web/vmware/downloads/info/slug/desktop_end_user_computing/vmware_workstation_player/16_0
   
This will enable you to import and work with the provided VM image. It is downloadable here: https://sap-my.sharepoint.com/:u:/p/and_krause/EQXwqMrQv6hMkPpLs3Xgf_YBdOxb7ZvD1TBKAUNNGLbLhw?e=OhF8sh

The username/password combination for the Linux OS installed is (`hacker/sap`). This VM is going to be your local work environment. You should not need to install software on your local laptop.

Kubernetes uses Docker Containers as a foundation. To make them available in cloud environments, you need an internet facing Container Registry. Docker Hub is such a registry. Create a free account on https://hub.docker.com/ to finish off the list of prerequisites.



## Download and Installation
This sample project - you need to download it and use the sample code and images. Then follow the step by step instructions in this project in order to setup and run the sample application.

## Steps

This sample is installed in multiple steps:

1. Pick your programming languge of choice and understand/inspect the respective sample application:
    1. [PHP](php/)
    2. [Python](python/)
    3. [node.js](nodejs/)
    4. [Java](java/)
2. Understand/inspect the [react frontend](react/) layer
3. [Create and publish a Docker Image](docker) of your react frontend and the sample application
4. Deploy your Application to [Kyma / Kubernetes](kyma)
5. (Optional) Connect to a [Chatbot](chatbot/) 
6. (Optional) Have a look at [additional resources](additional-resources)
7. Enjoy Hacking :smile:

## License
Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. 
This file is licensed under the SAP Sample Code License except as noted otherwise in the [LICENSE](LICENSE) file of this project.
 
