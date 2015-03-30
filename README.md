# README #

This is the repo for the public-facing "eyesover" (soon to be re-named?) UI.


### How do I get set up? ###

Before you can get this project set up to run locally on your machine, you need to have `node`, `bower`, `grunt`, and `grunt-cli` installed on your system.

* Install node here: https://nodejs.org/
* Once node is installed, you can install the remaining tools required by running the following command:
  * `sudo npm install -g grunt grunt-cli bower`

Once you have the above tools installed (and you restart your terminal), you can get the project up and running by following the steps below.

* Open up your terminal and navigate to whatever folder you will be working in
* Clone this repository (button in the top right of this page: http://puu.sh/gVDn4/7eeb7be7b8.png)
* Navigate to your newly cloned directory in your terminal with `cd eyesover-public-prototype`
* Once you are in the directory,
    * install the NPM dependencies that are required (as defined in `package.json`) by running `npm install`
    * install the Bower dependencies that are required (as defined in `bower.json`) by running `bower install`


### How do I run a local development copy of this app? ###

Once the node and bower dependencies have successfully been installed successfully, you can run a local instance of the app simply by running the command `grunt go`. This will:

* set up a grunt server that automatically watches for changes
* concatenate all the JS for the project into one file (for faster page loads), `concatenated/scripts.js`
* compile and concatenate all the LESS for the project into one file (for faster page loads), `concatenated/styles.css`
* copy all the *library* JS for the project into one file (for faster page loads), `concatenated/dependencies.js`
* copy all the *library* LESS for the project into one file (for faster page loads), `concatenated/dependencies.css`

The above steps will also "watch" for any time you change a project file -- and it will re-compile and concatenate all of the necessary files into the `concatenated` folder. You can optionally set up livereload to also automatically refresh your browser if you want to see your changes happen live. I personally am not a big fan of this, so I just do the typical workflow of: make a change, alt-tab to my browser, refresh, etc. Do whatever feels best for you :)

### Who do I talk to if I have questions? ###

* Samuel Stiles, samuel.dev.stiles@gmail.com -- don't hesitate to contact me with any questions or issues you run into when attempting to run this code :)