## Some notes from Aaron Graham (same as email that was sent)
Please use "npm install" which will gather everything you need along with "npm run start" in order to start the program.
English/Spanish text can be changed via the button in the top left hand corner.
file can be uploaded
tab index works fine
data is saved in localStorage and will allow you to close the browser due to a cat stepping on the keys, but your data will remain in the fields
I stayed with the current layout, as I did not want to stray too far from the mockup.
I used bootstrap 4.1.1, but I normally create sites with custom css from scratch
There are two language files, "en" and "es" which are located in the lang directory. This directory can be used to add additional languages (maybe translate them via google translate).
Submit button goes nowhere, but it will clear out the data with a "hard on the eyes" refresh. LocalStorage will also be cleared as well.
Validation was not added, as I did not reach out to you, but normally I would ask what type of validation would one want for each field.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
