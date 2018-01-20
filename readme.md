# Vue.JS Full Stack (MEVN Stack) Template
This is a simple template that you can use to scaffold full stack web 
applications which use Vue.JS on the frontend and MongoDB (via Mongoose), 
Express, and Node.JS on the backend.

# Installation and Usage
First, download and unzip the template, or clone it with the following command:
```
git clone https://github.com/dgdev1024/MEVN_Stack_Template.git
```
If you are starting a new project with this template and want to use version control,
after cloning this template, be sure to delete the '.git' folder from the project root
so you can initialize a new git repository.

Next, install the template's dependencies.
```
npm install
```

Finally, use one or more of the commands below to build and run the template app.
```
npm run client-dev      # Builds the frontend, using Webpack, in development mode.
npm run client-prod     # Builds the frontend in production mode.
npm run server-dev      # Runs the backend server in development mode.
npm run server-prod     # Runs the backend server in production mode.
npm run dev             # Builds the frontend and runs the backend server in development mode.
npm run prod            # Builds the frontend and runs the backend server in production mode.
npm start               # Defaults to the 'dev' instruction. Modify as needed.
```

The development mode commands should be used for testing your app, while the production mode
commands are used when your app is deployed. When deploying your app, be sure to modify the
'start' command in your package.json file so that it starts your app in production mode.

# Environment Variables

Included in this repository is a '.env' file containing environment variables necessary to run
your app in development mode. Initially, it contains variables dictating the port on which the
app will listen for connections, and the URL for the MongoDB database connection. You may adjust
these variables to your liking and add additional environment variables to this file as needed
during the development of your app.

In production mode, this file will be ignored. Thus, you will need to provide these variables
directly when running in production or in the settings page of your web hosting platform if you
are deploying your app.

You can specify environment variables on the fly when running your app like this:
```
# Run this app and connect to the database URL specified.
NODE_ENV=production DB_URL=mongodb://localhost:27017/test node index.js
```

Also, and this is very important, if you are using version control, ADD THE '.env' FILE TO YOUR
'.gitignore' FILE! The lines for '.env' and '*.env' are commented out in the '.gitignore' file.
Be sure to uncomment them before commiting and pushing your changes.

# Got Questions?

If you have any issues with this template, feel free to file an issue on this repo and I will
get a hold of it. If you have any other questions, go ahead and send me an email at dgdev1024@gmail.com
or send me a tweet: https://twitter.com/GuitarsNGames.