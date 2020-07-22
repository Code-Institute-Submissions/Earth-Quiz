# Earth Quiz/Testing

## Table of Contents
1. [Manual Testing](#manual-testing)
2. [Code Validation](#code-validation)
3. [Browser and mobile testing](#browser-and-mobile-testing)
4. [Additional Testing](#additional-testing)
## Manual Testing
#### Manual tests have been done throughout the development of the project.
#### The following test scenarios confirms that the website is behaving accordingly, and that bugs have been taken care of:
### Landing Page
+ Question container is hidden when page is reloading, and only landing page is shown.
+ Clicking on "Planet Earth" text is refreshing whole page, and brings user back to landing page even when quiz is being played. Can be referred as a home link.
+ Hovering over Earth facts zooms in text for better readability.
+ Clicking on "Start Quiz" button quiz container containing random questions, answers and images is shown and landing page is hidden.
### Quiz Questions
+ Random question, image and answers for that specific questions are shown.
+ Clicking on any answer button checks if that answer is correct and in case it is, change background of that button to green and all others to red, same applies if it's incorrect, only colour is changing depending if the clicked answer is correct. Also once any answer was clicked Next button appeared on the bottom.
  + Bug was discovered here, after any answer being clicked on, that did not disable buttons, so multiple clicks were available and dataset for correct answer was being counted for each correct answer clicked.
    + Fixed this bug by disabling answer buttons after first click and enabling it back after Next button was clicked.
+ Clicking on Next button state of the buttons were supposed to clear(all colour classes applied to each button).
  + Initial function created for clearing this state (clearStatusClass()) was not enough to clear states, so new function was created (resetButtonState()) and by using foreach in this function went into each button, and clear colour status it had.
  + Dataset could not be reseted by above function and by playing game further more, bug was discovered where considering that dataset could not be cleared by resetButtonState() score was not correct.
    + Fixed this bug by removing data-correct attribute from all buttons once new question is loaded.
### Score and Feedback container
+ Three different feedbacks (GIFS) were uploaded based on user's score and specific gif would appear at the end of the quiz showing users score as well.
  + Optimization issue appeared here considering that even after compressing gifs, they took longer time to load at the end of the quiz. Fix for that was to convert them to mp4 video by using [gif-2-mp4](http://gif-2-mp4.com/). Converting them to mp4 reduced loading time significantly. GIF files were left as a backup just in case some websites cannot load mp4 videos.
+ Clicking on Try Again button hides score container, resets score to 0, resets each button state, shows question container again and random question is generated
  + Considering all functions were ready and running there was no issues with this.
+ Clicking on Quit button works as well without any issues, once clicked whole page is refreshed back to landing page, same as clicking on "Planet Earth".
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
+ No issues were found on Google Chrome, Mozilla Firefox, Microsoft Edge and Opera.
+ No issues were found on any mobile devices.
#### All testing was performed using:
+ Google Chrome Dev Tools.
+ Android and IOS. 
+ Desktop - tested display on different screen sizes.
+ Mobile Phones and Tablets - All emulated devices offered in Google Dev Tools as well as physical devices such as Samsung Galaxy Note 8, Samsung Galaxy Edge 7, Huawei Mate 20 Lite and iPad.
## Additional Testing
#### I asked my family and friends to try the game out on the laptop and phone devices and they could not find errors within the game or the responsiveness of the site.