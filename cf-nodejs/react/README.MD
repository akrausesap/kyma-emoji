# UI flavoured with React and Fundamental ✨

The Fundamental-react library is a set of React components built using SAP [Fundamental Styles](https://github.com/SAP/fundamental-styles).

The SAP Fundamental Styles library is a design system and HTML/CSS component library used to build modern product user experiences with the SAP look and feel. Learn more [here](https://github.com/SAP/fundamental-styles).

## Requirements

This project requires the latest stable versions of: 

- Node
- NPM 

## Getting Started

To get started run `npm install` to install all npm dependent packages. You will only need to do that once on a blue moon when you clone this project
on your computer.

Then do `npm start` to start the development server.

For production and serving static files, you can try `npm build` and it generate all necessary files to serve for production.

### Include Fundamental-react in your own application!

After generating a react application with the create react app generator tool, follow the steps below:

1. Install fundamental-react and all dependencies you require for your application.

`npm install fundamental-react` && `npm start`

2. All components are currently packaged together with their respective css, you will need to edit your webpack configuration to handle these files. 
See [css-loader](https://github.com/webpack-contrib/css-loader).

3. Import components as needed. See [Component Documentation](https://sap.github.io/fundamental-react/home) for examples and API details.

`import { Alert } from 'fundamental-react/Alert';`

or

`import { Alert } from 'fundamental-react';`

For more information about Fundamental-react visit the link [here](https://github.com/SAP/fundamental-react)
