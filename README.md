# Hi-Lo | Card Game

[View the live site here](https://mattgriffindev.github.io/hi-lo/ "Hi-Lo Game")

Hi-Lo is a browser game based on the card game, High Low. The aim of the game is to turn over six cards, correctly guessing whether the value of each card if higher or lower than the previous card. If the player guesses incorrectly, the game ends. The game is responsive and accessible on a range of web-enabled devices, making it easy to navigate for new and existing players.

NOTE: RESPONSIVE IMAGE HERE

## Contents

1. [Project Objectives](#1-project-objectives)
2. [User Experience](#2-user-experience-ux)
3. [Features](#3-features)
4. [Technologies Used](#4-technologies-used)
5. [Testing](#5-testing)
6. [Deployment](#6-deployment)
7. [Credits](#7-credits)


## 1. Project Objectives

**Developer Objectives**

 - To create fun but challenging gaming experience
 - To enable the user the play on a range of screen sizes
 - To give the user different card designs to choose from
 - To give the user the means of contacting the developer directly
 - To give the user the option to toggle audio on and off
 - To give the user the option to toggle light and dark themes

**User Objectives**

 - To be able to find out how to play
 - To have simmple controls
 - To be able to replay without reloading the site
 - To be able to play on a range of devices
 - To be able to provide feedback to the developer
 - To be able to set my preferences for audio and theme

## 2. User Experience (UX)

**Site Structure**

The website is a single-page site consisting of one HTML page (index.html). The site is divided in to three main sections: 1) the introduction (#intro-container); 2) the main menu and sub-menus (#menu-container); and 3) the game (#game-container).

**Color Scheme**

TBC

**Typography**

The main font is Irish Grover. This is used throughout the site with a cursive fallback font.

The paragraph font is Roboto. This is used through the site with a sans-serif fallback font.

The signature font is M PLUS 1 Code. This is used in the footer with a cursive fallback font.

**Imagery**

TBC

**Interactive Links**

The site includes 2 interactive links to external sites.
 - A link to Twitter from the results window when a user wins the game
 - A link to the developer's GitHub profile from the footer

All links open in a new tab/window.

**Wireframes**

Wireframes for desktop, tablet and mobile view were created using [Balsamiq](https://balsamiq.com/wireframes/ "Balsamiq").

The original wireframes can be accessed [here](assets/wireframes/wireframes.pdf "Wireframes").

## 3. Features

**Introduction**

 - 5 fanned out cards, initially face down, that spin to consecutively to spell the name of the game 'HI-LO'
 - Fully responsive on all screen sizes

**Menu**

 - 4 menu options: 1) Play; 2) How to play; 3) Contact us; and 4) Settings
 - Fully responsive on all screen sizes

**Header**

 - Hi-Lo logo
 - Icon to indicate if theme is light or dark
 - Icon to indicate if audio is muted
 - Drop-down menu
 - Visible during game play
 - Fully responsive on all screen sizes

**Drop-down menu**

 - 4 menu options: 1) Play; 2) How to play; 3) Contact us; and 4) Settings
 - Accessible during game play
 - Fully responsive on all screen sizes

**Game**

 - 6 cards, initially face down
 - 6 indicators that light green if user guesses correctly, and red if user guesses incorrectly
 - Higher and lower button for user to input their guess
 - Fully responsive on all screen sizes

**Result**

 - Result window appears when user wins/loses the game
 - If user wins, three particle bursts display
 - If user wins, there is an option to share on Twitter
 - If user loses, there is an option to replay
 - Fully responsive on all screen sizes

**Footer**

 - Copyright information and link to developer's GitHub profile
 - Not visible during game play

**Audio**

 - Different audio response depending on whether user guesses correctly or incorrectly
 - Mutable during game play

## 4. Technologies Used

**Languages Used**

- [HTML5](https://en.wikipedia.org/wiki/HTML5 "HTML5")

- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets "CSS3")

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript")

**Frameworks, Libraries and Programes Used**

- [Bootstrap v5](https://getbootstrap.com/docs/5.0/getting-started/introduction/ "Bootstrap v5") was used to assist with the responsiveness and styling of the site.

- [Google Fonts](https://fonts.google.com/ "Google Fonts") was used to import the fonts into the style.css file.

- [Font Awesome](https://fontawesome.com/ "Font Awesome") was used to add icons for aesthetic and UX purposes.

- [Hover.css](https://ianlunn.github.io/Hover/ "Hover.css") was used on the links in the navbar to add the underline-from-center transition on hover.

- [jQuery](https://jquery.com/ "jQuery") was used to navigate the DOM using JavaScript.

- [Git](https://git-scm.com/ "Git") was used for version control by using the Gitpod terminal to commit to Git and push to GitHub.

- [GitHub](https://github.com/ "GitHub") was used to store the project code after being pushed from Git.

- [Balsamiq](https://balsamiq.com/ "Balsamiq") was used to create the wireframes during the design process.

## 5. Testing

**W3C Markup Validator**

The [W3C Markup Validator](https://validator.w3.org/ "W3C Markup Validator") was used to to validate the site's HTML.

The initial check reported 3 warnings and 4 errors:
 - 4 errors were resolved by deleting the 'aria-labelledby' attrtibute
  - 2 warnings were resolved by deleting the 'type' attribute from JavaScript resources
   - 1 warning was resolved by adding the 'lang' attribute to the HTML tag

A copy of the original report can be accessed [here](assets/tests/html-check-v1.pdf "W3C Markup Validator report").

A copy of the final report can be accessed [here](assets/tests/html-check-v2.pdf "W3C Markup Validator report").

**W3C CSS Validator**

The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/ "W3C CSS Validator") was used to validate the site's CSS.

The initial check reported no errors.

A copy of the report can be accessed [here](assets/tests/css-check-v1.pdf "W3C CSS Validator report").

**JSHint Validator**

The [JSHint Validator](https://jshint.com/ "JSHint Validator") was used to validate the site's JavaScript.

The initial check reported 9 warnings.
 - 9 warnings were resolved by adding missing semicolons

A copy of the original report can be accessed [here](assets/tests/js-check-v1.pdf "JSHint Validator report").

A copy of the final report can be accessed [here](assets/tests/js-check-v2.pdf "JSHint Validator report").

**Lighthouse Testing**

The site was tested using Lighthouse on the Chrome and Microsoft Edge browsers to determine the site’s performance, accessibility, best practices, and SEO.

- Chrome desktop:
    - Performance 98%
    - Accessibility 100%
    - Best Practices 92%
    - SEO 100%

- Edge desktop:
    - Performance 95%
    - Accessibility 100%
    - Best Practices 92%
    - SEO 100%

The reports can be viewed below:

- [Chrome Desktop](assets/tests/chrome-lighthouse-desktop.pdf "Chrome Desktop report")

- [Chrome Mobile](assets/tests/chrome-lighthouse-mobile.pdf "Chrome Mobile report")

- [Edge Desktop](assets/tests/edge-lighthouse-desktop.pdf "Edge Desktop report")

- [Edge Mobile](assets/tests/edge-lighthouse-mobile.pdf "Edge Mobile report")

**a11y Color Contrast Accessibility Validator**

The [ally Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/ "ally Color Contrast Accessibility Validator") was used to test for color contrast problems.

A copy of the report can be accessed [here]( "ally Color Contrast Accessibility Validator report").

**Responsiveness Testing**

The site's responsiveness was tested manually, using the Google Chrome DevTools, and the [Responsive Design Cheker](https://responsivedesignchecker.com/ "Responsive Design Checker") website.

The site was responsive on all screen sizes from 320x480px to 1920x1200px.

**Known Bugs**

No bugs have been identified.

### Testing User Objectives

 **To able to find out how to play**

| Feature | Expected result | Actual result |
| ----------- | ----------- | ----------- |
| How to play menu item | When user clicks on 'How to play', the 'How to play' window opens | As expected |
| Dropdown menu | When user clicks on the menu button, the dropdown menu opens | As expected |
| How to play dropdown menu item | When user clicks on 'How to play' in the dropdown menu, the 'How to play' window opens | As expected |

**To have simple controls**

| Feature | Expected result | Actual result |
| ----------- | ----------- | ----------- |
| Higher button | When user clicks on higher button, the next card reveals & if higher than the previous card, game continues, else game ends | As expected | 
| Lower button | When user clicks on lower button, the next card reveals & if lower than the previous card, game continues, else game ends | As expected |

**To be able to replay without reloading the site**

| Feature | Expected result | Actual result |
| ----------- | ----------- | ----------- |
| Play again button | When user clicks on 'Play again' buttong, game restarts | As expected |

**To be able to play on a range of devices**

| Feature | Expected result | Actual result |
| ----------- | ----------- | ----------- |
| Responsive site | When user loads site on any device, all functionality is present | As expected |

**To be able to provide feedback to the developer**

| Feature | Expected result | Actual result |
| ----------- | ----------- | ----------- |
| Contact us menu item | When user clicks on 'Contact us', the 'Contact us' window opens | As expected |
| Dropdown menu | When user clicks on the menu button, the dropdown menu opens | As expected |
| Contact us dropdown menu item | When user clicks on 'Contact us' in the dropdown menu, the 'Contact us' window opens | As expected |
| Send button | When user clicks on send button, form data is sent to developer | As expected |

**To be able to set my preferences for audio and theme**

| Feature | Expected result | Actual result |
| ----------- | ----------- | ----------- |
| Settings menu item | When user clicks on 'Settings', the 'Settings' window opens | As expected |
| Dropdown menu | When user clicks on the menu button, the dropdown menu opens | As expected |
| Settings dropdown menu item | When user clicks on 'Settings' in the dropdown menu, the 'Settings' window opens | As expected |
| Toggle sound button | When user clicks on 'Toggle sound' button, audio is muted/unmuted | As expected |
| Toggle sound icon | When user clicks on 'Toggle sound' button, header icon responds | As expected |
| Toggle theme button | When user clicks on 'Toggle theme' button, theme is light/dark | As expected |
| Toggle theme icon | When user clicks on 'Toggle theme' button, header icon responds | As expected |

## 6. Deployment

**GitHub Pages**

The project was deployed to GitHub Pages using the following steps:

1.	Log in to GitHub and locate the [GitHub respository](https://github.com/mattgriffindev/hi-lo/ "GitHub respository").
2.	At the top of the repository (not top of page), locate the 'Settings' icon on the menu.
3.	Scroll down the Settings page until you locate the 'GitHub Pages' Section.
4.	Under 'Source', click the dropdown called 'None' and select 'Master Branch'.
5.	The page will automatically refresh.
6.	Scroll back down through the page to locate the now published [site link](https://mattgriffindev.github.io/hi-lo/index.html "Hi-Lo") in the "GitHub Pages" section.

**Forking the GitHub Repository**

By forking the GitHub repository you make a copy of the original repository on your GitHub account to view and/or make changes without affecting the original repository by using the following steps:

1.	Log in to GitHub and locate the [GitHub respository](https://github.com/mattgriffindev/hi-lo/ "GitHub respository").
2.	At the top of the repository (not top of page) just above the 'Settings' icon on the menu, locate the "Fork" icon.
3.	You should now have a copy of the original repository in your GitHub account.

**Making a Local Clone**

1.	Log in to GitHub and locate the [GitHub respository](https://github.com/mattgriffindev/hi-lo/ "GitHub respository").
2.	Under the repository name, click 'Clone or download'.
3.	To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4.	Open Git Bash.
5.	Change the current working directory to the location where you want the cloned directory to be made.
6.	Type "git clone", and then paste the URL you copied in Step 3.
7.	Press Enter. Your local clone will be created.

## 7. Credits

**Information Sources/Resources**

The following sources were used to provide additional information relating to HTML, CSS, and JavaScript:

- [W3C Schools](https://www.w3schools.com/ "W3C Schools") 

- [Stack Overflow](https://stackoverflow.com/ "Stack Overflow") 

- [CSS Tricks](https://css-tricks.com/ "CSS Tricks") 

**Content**

All content was written by the developer except where indicated in the code.

**Acknowledgements**

Thank you to my mentor, Dario Carrasquel for his helpful feedback, and to tutor support at Code Institute for their support.


