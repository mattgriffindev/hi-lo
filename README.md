# Hi-Lo | Card Game

[View the live site here](https://mattgriffindev.github.io/hi-lo/ "Hi-Lo Game")

Hi-Lo is a browser game based on the card game, High Low. The aim of the game is to turn over six cards, correctly guessing whether the value of each card if higher or lower than the previous card. If the player guesses incorrectly, the game ends. The game is responsive and accessible on a range of web-enabled devices, making it easy to navigate for new and existing players.

NOTE: RESPONSIVE IMAGE HERE

## Contents

1. [User Experience](#1-user-experience-ux)
2. [Features](#2-features)
3. [Technologies Used](#3-technologies-used)
4. [Testing](#4-testing)
5. [Deployment](#5-deployment)
6. [Credits](#6-credits)


## 1. User Experience (UX)

TBC

### 1.1. Design

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

TBC

**Wireframes**

Wireframes for desktop, tablet and mobile view were created using [Balsamiq](https://balsamiq.com/wireframes/ "Balsamiq").

The original wireframes can be accessed [here](assets/wireframes/wireframes.pdf "Wireframes").

## 2. Features

The website is designed to be responsive on all device sizes.

## 3. Technologies Used

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

## 4. Testing

### 4.1. Validator Testing

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

The reports can be viewed below:

- [Chrome Desktop]( "Chrome Desktop report")

- [Chrome Mobile]( "Chrome Mobile report")

- [Edge Desktop]( "Edge Desktop report")

- [Edge Mobile]( "Edge Mobile report")

**a11y Color Contrast Accessibility Validator**

The [ally Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/ "ally Color Contrast Accessibility Validator") was used to test for color contrast problems.

A copy of the report can be accessed [here]( "ally Color Contrast Accessibility Validator report").

**Responsiveness Testing**

The website's responsiveness was tested manually, using the Google Chrome DevTools, and the [Responsive Design Cheker](https://responsivedesignchecker.com/ "Responsive Design Checker") website.

The website was responsive on all screen sizes from 320x480px to 1920x1200px.

**Known Bugs**

No bugs have been identified.

## 5. Deployment

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

## 6. Credits

**Information Sources/Resources**

The following sources were used to provide additional information relating to HTML and CSS:

- [W3C Schools](https://www.w3schools.com/ "W3C Schools") 

- [Stack Overflow](https://stackoverflow.com// "Stack Overflow") 

**Content**

All content was written by the developer.

**Acknowledgements**

Thank you to my mentor, Dario Carrasquel for his helpful feedback, and to tutor support at Code Institute for their support.


