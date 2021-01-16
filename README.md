# Basic React Boilerplate with SASS, live-server, and webpack --watch for real-time editing
<hr>

### This boilerplate includes:

<ol>
    <li>Index.html file for React app to output (div id="appROOT")
    <li>Bundle.js into which all source files compile via webapp
    <li>live-server to enable real-time editing
    <li>Normalize-css to ensure all css is working as expected
    <li>Source files folder containing
        <ul>
            <li>scss base & components folder
            <li>index.js from which to serve as base for React apps
            <li>React components folder to create components for import to index.js
        </ul>
    <li>Conversion from JSX to ES5 via babel presets env & react
</ol>

### How to use this repo:

<ol>
    <li>Clone this repo
    <li>Install required dependancies from package.json from terminal using command:
    <ul>
        <li> npm install
    </ul>
    <li>Open 2x terminals from root dir and run these commands:
    <ul>
        <li> npm run build
        <li> npm run server
    </ul>
    <li>Done! You can now begin:
        <ul>
            <li>Writing JSX in react_components dir then import to index.js
            <li>Writing SCSS in base/settings.scss and corresponding components folder (import to base)
        </ul> 
</ol>

If everything is working correctly you should be greeted with a simple, colour formatted HTML page.
<hr>
MIT License, for queries please reach out.