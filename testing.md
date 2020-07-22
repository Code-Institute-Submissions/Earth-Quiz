# Earth Quiz/Testing

## Table of Contents
1. [Manual Testing](manual-testing)
2. [Code Validation](code-validation)
3. [Browser and mobile testing](browser-and-mobile-testing)
4. [Additional Testing](additional-testing)
## Manual Testing
#### Manual tests have been done throughout the development of the project.
#### The following test scenarios confirms that the website is behaving accordingly, and that bugs have been taken care of:

## Code Validation
### Autoprefixer
+ Added prefixes to CSS for different browsers.
### W3C Markup Validator
+ One warning was found on index.html in score section as empty h2 element was created to hold an actual score after the game.
  + Added "Score" text to mentioned element and that fixed the issue.
+ Other than mentioned above, there were no errors or warnings in index.html.
### W3C CSS Validator
+ No errors or warnings were found on style.css.
### JSHint 
+ Couple of unused variables which were deleted from script.js file.
+ 23 warnings throught my whole code, all of them were fixed by adding "// jshint esversion: 6" on top of my script file.
  * 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
  * arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
  * 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
  * 'template literal syntax' is only available in ES6 (use 'esversion: 6').
+ 14 warnings for undefined variable ("$"), it was reffering to JQuery selector and it can be ignored.
## Browser and mobile testing
+ Chosen font Balsamiq Sans not displaying on Safari, sans serif is loading instead.
+ No issues were found on Google Chrome, Mozilla Firefox, Microsoft Edge, Opera and Microsoft Edge.
+ No issues were found on any mobile devices.
#### All testing was performed using:
+ Google Chrome Dev Tools.
+ Android and IOS. 
+ Desktop - tested display on different screen sizes.
+ Mobile Phones and Tablets - All emulated devices offered in Google Dev Tools as well as physical devices such as Samsung Galaxy Note 8, Samsung Galaxy Edge 7, Huawei Mate 20 Lite and iPad.
## Additional Testing
#### I asked my family and friends to try the game out on the laptop and phone devices and they could not find errors within the game or the responsiveness of the site.