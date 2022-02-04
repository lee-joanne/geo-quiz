# Geo Quiz Website

- [Geo Quiz Website](#geo-quiz-website)
  * [User Experience (UX)](#user-experience--ux-)
    + [User Stories](#user-stories)
    + [Design](#design)
    + [Wireframes](#wireframes)
  * [Features](#features)
    + [Existing Features](#existing-features)
    + [Features Left to Implement](#features-left-to-implement)
  * [Technologies Used](#technologies-used)
    + [Languages Used](#languages-used)
    + [Frameworks, Libraries & Programs Used](#frameworks--libraries---programs-used)
  * [Testing](#testing)
    + [Validator Testing](#validator-testing)
    + [Accessibility Testing](#accessibility-testing)
    + [Unfixed Bugs](#unfixed-bugs)
    + [Fixed Bugs](#fixed-bugs)
    + [Further Testing](#further-testing)
  * [Deployment](#deployment)
  * [Credits](#credits)
  * [Code](#code)
    + [Content](#content)
    + [Media](#media)
    + [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

Test your geography skills with Geo Quiz! This game features three levels where the questions become harder and harder, allowing users to really test their knowledge and hopefully learn new, fascinating facts about geography. There are ten questions in each round, totaling thirty multiple choice questions. The user must beat each level before moving onto the next, or else they will have to start over again.

[View live project here](https://lee-joanne.github.io/geo-quiz/)

![Screenshot of Geo Quiz page on Am I Responsive](assets/documentation/amiresponsive.png)

## User Experience (UX)

* ### User Stories
  - First Time Visitor Goals

    1. As a First Time User, I want to fully understanding what this game is and the purpose of it the moment I enter the website. I can clearly see the purpose of the game in the title and headings of the website that this is a geography quiz to test my knowledge in geography.

    2. As a First Time User, I want to be able to understand how to play this game and what to expect. I can clearly see the 'How To Play' button which shows me thorough instructions in a modal window. I can clearly explained that I must score 6 points to beat level 1, 12 points to beat level 2, and 20 points to beat the game. The rules to beat the levels are in a list so I can clearly distinguish the rules from the rest of the instructions. 

    3. As a First Time User, I want this website to be easy on the eyes and easy to navigate. I can clearly see that the website is nicely designed and everything is clearly placed. The title of the website is large at the header, the 'Let's Play' and 'How To Play' buttons are large and very visible so I know exactly how to navigate myself around the website. There are icons on the buttons as well, 'How To Play' featuring a question mark and 'Let's Play' featuring a game controller. This makes the website more intuitive and I know exactly what each button will do before I even have to read them. 

    4. As a First Time User, I want to understand how many scores I have and if I have won the game or not. When I play the game, I can see the score at the top incrementing by 1 each time I get a question correct. The game also gives me feedback whether the answer is correct or not. If I guess incorrect, the game will tell me what the answer was. After I finish a level, the game lets me know whether I have passed the level or if I have failed. The game gives me the opportunity to try again.
 
  - Returning / Frequent Visitor Goals

    1. As a Returning and Frequent Visitor, I want to be able to play this game again and have my score reset and the questions shuffled. At the 'Game Over' or 'Level Three Completed' page, there is a button to play again that refreshes the entire page back to the homepage. Here, I can refresh my memory with the rules on how to beat each level and play the game from scratch and with shuffled questions. 

    2. As a Returning and Frequent Visitor, I want to be able to keep in touch with the creator of the website or perhaps keep in touch with updates to the game. When I scroll down, I see there are social media links at the bottom that I can click on and takes me to a different tab so I do not navigate out of the game website.


* ### Design
  - Colour Scheme

    1. Blue (#5D748D)
    2. White
    3. Darker Blue (#254153)
    4. Black

    - The main colours I have selected for this website are blue (#5D748D), white, darker blue (#254153), and black. The main background image of the game is of blue skies and Greek statues. To match the background image, the #5D748D shade of blue suits nicely and therefore was used as container for the game itself. The blue (#5D748D) shade was also used for the footer container with slight opacity to make it look more appealing. The buttons for the main functions of the game ('How To Play', 'Let's Play', multiple choice options) are also blue (#5D748D) with white bordering. White was used as the font colour (text and social media icons) to contrast nicely with the blue (#5D748D) background for high accessibility. The darker blue (#254153) shade was used for the 'Next', 'Play Again', and 'Let's Go' buttons to differentiate them from the multiple choice buttons and when the user will be moving onto the next part of the quiz. The darker blue (#254153) serves the purpose of signalling the user they have reached an 'end' (end of the question, end of the level, end of the game) and the button will take them to the next part. Black is used for social media links and 'X' in modal window instructions being hovered over to contrast the blue (#5D748D) background. 

  - Typography

    1. Dosis
    2. Sans Serif (fallback)

    - The main font used is Dosis, as Sans Serif as the fallback font. Dosis is a rounded sans-serif type family, which makes the font look very readable to increase accessibility. The font looks very playful and eyecatching which compliments well with the purpose of the website (a game).

  - Imagery

    - The background image contains a gorgeous photo of blue sunny skies and the Erechtheion temple in Athens, Greece. This ancient temple photo is extremely eyecatching, minimalistic, and bright which will give users a sense of welcome and excitement while preparing for the quiz. This background photo is perfect for the quiz because the Erechtheion temple is conveniently on the right side of the quiz game. Therefore, the imagery does not clash with the game container. The image goes perfectly well with the blue (#5D748D), white, and darker blue (#254153) colours selected. 

* ### Wireframes
  - Low-fidelity wireframes have been created using the program Balsamiq.

    - Desktop Wireframe - [View](assets/documentation/desktop-wireframe.png) 

    - Mobile Wireframe - [View](assets/documentation/mobile-wireframe.png)

    - Tablet Wireframe - [View](assets/documentation/tablet-wireframe.png) 

## Features

* ### Existing Features

- Logo
  -  The logo is an h1 heading at the very top of the game. A Font Awesome icon of the globe is included to make the logo look more appealing and related to the game. The user can fully understand the theme of the quiz without having to read much further. The white font of the logo contrasts the conveniently blue background image to increase acessibility. The logo also serves as a link to redirect the user to the index.html page, which will ultimately refresh the game. 

  ![Screenshot of the logo](assets/documentation/features-logo.png)

- Footer
  - The footer is at the very bottom of the page, with two social media icons large and in white. The icons are very spread apart so the user can easily click on the social media icon they wish with minimal mistakes. The icons are white to contrast the blue (#5D748D) footer container. The footer container contains opacity to make the footer look more appealing, rather than having a solid blue (#5D748D) line running across the bottom of the user's page. The icons will become black when hovered over, to assure the user the buttons are clickable and the user is about to select the correct one. 

  ![Screenshot of the footer](assets/documentation/features-footer.png)

- Homepage
  - The homepage of the game consists of a solid blue (#5D748D) container (div) with white font for high accessibility. The h2 heading welcomes the user to the game and the h3 heading gives a brief explanation of the game's purpose. After the headings, there are only two buttons available to make the homepage look clean, neat, and minimalistic without trying to confuse or overwhelm the user. The buttons clearly state their purpose, the first one 'How To Play' with a question mark icon and the other, 'Let's Play' with a game controller icon. The users are able to easily identify the purpose of the two buttons by the icons without having to read much further. The buttons are blue (#5D748D) with white bordering and font. When hovered over, the buttons will become white with blue (#5D748D) font to assure the user that the buttons are clickable and the user is about to select the correct one. 

  ![Screenshot of the homepage](assets/documentation/features-homepage.png)

- How To Play - Instructions
  - When the user clicks the 'How To Play' button, a modal window will pop up. Behind the modal window, the page will become very dark as the focus goes straight to the modal window. The user is able to read the h3 heading the purpose of the modal window, which is to learn how to play the game. Thorough instructions are given to the user on what to expect from the game. The rules on how to beat the levels are in an unordered list to make the rules stand out from the rest of the text. The font is white and the modal window is blue (#5D748D) to match the blue theme of the game. There is an 'X' icon at the top left corner of the modal window for the user to close the modal window. The 'X' icon becomes black when hovered to assure the user the button is clickable and the user is about to click the correct button. 

  ![Screenshot of the modal window of instructions](assets/documentation/features-modal.png)

- Question Area
  - When the user clicks the 'Let's Play' button, the homepage container contents will be cleared out and the user will be shown the question area. The score count is at the top of the game, always starting at 0 to indicate a new game. The question will be shown below the score. There will be four buttons containing possible answers. The button style is similar to the homepage container: blue (#5D748D) with white bordering/font which becomes white and has blue (#5D748D) font when hovered over. The game and questions are fully responsive on mobile, tablet, laptop, and desktop viewports. 

  ![Screenshot of the question area](assets/documentation/features-buttons.png)
  ![Screenshot of the question area](assets/documentation/features-responsivebuttons.png)

- Incorrect Answer
  - When the user answers the question incorrectly, the game will immediately give feedback to the user apologizing and giving the correct answer of the question. The 'Next' button will then appear in darker blue (#254153). This shade of blue is used to help differentiate the purpose of the 'Next' button from the other buttons. The multiple choice buttons have been disabled so they will no longer be hovered over nor clickable, so the user is not able to cheat and try again. The 'Next' button will take the user to the next question. The purpose of the design to make the user click 'Next' first before moving onto the next question is to give the user time to read feedback and to re-read the question and the answer to allow the users to learn possibly new geography facts. 

  ![Screenshot of an incorrect answer](assets/documentation/features-incorrectanswer.png)

- Correct Answer
  - When the user answers the question correctly, the game will give feedback to let them know they are correct. The score at the top of the question area will increment by 1 each time the user gets a correct answer. The 'Next' button will pop up again to prompt the user to move onto the next question. 

  ![Screenshot of an correct answer](assets/documentation/features-correctanswer.png)

- Level One Complete
  - When the user completes level one after scoring a minimum of 6 points, the game will congratulate the user to make the user feel happy. The message also has a smiley face. The message warns the user that the questions will get harder from here and allows the user to click the 'Let's Go!' button which will move onto the next round. The darker blue (#254153) shade is used here to contrast from the other buttons, because this button will allow the user to move onto the next round of the game, signalling the 'end' of level one. The button will become white when hovered. 

  ![Screenshot of level one completed](assets/documentation/features-levelonecomplete.png)

- Level Two Complete
  - When the user completes level two after scoring a minimum of 12 points, the game will again show a smiley face and congratulate the user for completing level two. The game will warn the user again the next level will be hard and allows the user to click the 'Let's Go!' button to move onto the next round. 

  ![Screenshot of level two completed](assets/documentation/features-leveltwocomplete.png)

- Game Complete
  - When the user completes the final round after scoring a minimum of 20 points, the game is complete. A medal icon is shown and the game congratulates the user. The game gives the user the option to play again, and warns the user that the 'Play Again' button will refresh the page to reset the score and reshuffle the quiz questions. A warning is shown to the user first because some users might find refreshing to be an inconvenience so it is better to have users prepared first. Therefore, it is best to explain the purpose of refreshing, which is to reset the score and reshuffle the quiz. The button will become white when hovered. 

  ![Screenshot of game completed](assets/documentation/features-gamecomplete.png)

- Game Over 
  - When the user fails to reach the minimum points to move onto the next level, a game over message will show with a sad face and an apologetic message. The game gives the user the option to play again, and again warns the user that the 'Play Again' button will refresh the page to reset the score and reshuffle the questions. The button will become white when hovered. 

  ![Screenshot of game over](assets/documentation/features-gameover.png)

* ### Features Left to Implement

  - In the future, I would like to create a form where users can create a username for themselves to have the game more personalized. I would like the game to be able to store score histories so the user is able to refer back to old scores and see if they can beat their previous scores. This feature will be highly beneficial for Returning / Frequent Visitors of the website. 

  - I would like to add levels where the questions consist of labelling maps and identifying flags. This feature would make the game even more interactive and more visual for the users to test out a variety of geography skills. 

## Technologies Used

* ### Languages Used

  - [JavaScript](https://www.javascript.com/)
  - [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - [CSS3](https://en.wikipedia.org/wiki/CSS)

* ### Frameworks, Libraries & Programs Used

  1. [Google Fonts](https://fonts.google.com/)
      - Google Fonts was used to import the font Dosis.
  
  2. [Font Awesome](https://fontawesome.com/) 
      - Font Awesome icons were used throughout the website to make the page look more aesthetically pleasing.

  3. [Balsamiq](https://www.balsamiq.com/)
      - Balsamiq was used to create low-fidelity wireframes of the website. 

  4. [Git](https://git-scm.com/)
      - Git was used by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

  5. [GitHub](https://github.com/)
      - Git was used to store the project code after being pushed in by Git. GitHub Pages was also used to deploy the project to create a public link.

  6. [Pexels](https://www.pexels.com/)
      - Pexels was used for the background image of the Erechtheion temple in Athens, Greece. The background image is used to make the website look more eyecatching and to match the theme of the quiz. 

  7. [ColorZilla](https://www.colorzilla.com/)
      - ColorZilla Chrome extension was used to select the blue (#5D748D) colour by using this tool on the background image to identiy the main colour scheme of the website.
  
  8. [Tinypng.com](https://tinypng.com/)
      - Tinypng was used to compress the background image to enhance performance speed.

  9. Beautify
      - Beautify Command Palette on Git was used to organize the code in all html and CSS files.

  10. [Ecotrust-Canada Markdown-toc](https://ecotrust-canada.github.io/markdown-toc/)
      - Ecotrust-Canada Markdown was used to create the table of contents for this README. 

  11. [Favicon.io](https://favicon.io/emoji-favicons/globe-showing-americas/)
      - Favicon.io was used to get the globe favicon for the website. 

## Testing

* ### Validator Testing

To accurately test the code of the website, JSHint, the W3C Markup Validator, W3C CSS Validation Service were used to validate all code used in the project to spot any errors in the syntax. No errors were found in the JS, HTML, and CSS files. In JSHint, all separate JavaScript files were copied and pasted together. 

  - [JSHint](https://jshint.com/)
![JavaScript Results](assets/documentation/javascript-validator.png)

  - [W3C Markup Validator](https://validator.w3.org/)
![HTML Results](assets/documentation/html-validator.png) 

  - [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
![CSS Results](assets/documentation/css-validator.png) 

* ### Accessibility Testing

The website was also tested on Lighthouse to test accessibility. When tested, accessibility scored 100. 

![Lighthouse Results](assets/documentation/lighthouse.png) 

* ### Unfixed Bugs

- The main unfixed bug to mention is when the website is previewed on Google DevTools in the Surface Duo and Nest Hub viewports, the website is not very vertically responsive to these devices. The homepage container / question area will overlap the footer container. In the Nest Hub viewport, the 'Next' button will halfway inaccessible due to the footer container, creating a bad user experience. I tried to fix this bug by creating a height media query. However, when adding height media queries, the smaller devices such as iPhone SE and iPhone XR viewports got tampered with so I have decided to prioritize width responsiveness over height responsiveness since it is more likely that users will be viewing from iPhone SE and iPhone XR devices than Nest Hub and Surface Duo devices. 

* ### Fixed Bugs

- Bugs that have been fixed during the process of building this website are:

  - When the game switches from one container to another (hompage container to question area) or moving from question area to level completed / game over, certain HTML elements would remain on the div such as paragraphs, headings, or buttons. This was fixed by creating a 'hide' class in the CSS with display: none to be called in the JavaScript file whenever specific HTML elements need to be hidden or called. 

  - At first, when the user selects a multiple choice answer, the user was able to click any multiple choice button again to infinitely increment their score as they wish and change their answer. I fixed this issue by creating a CSS class 'button-disable' with pointer-events: none to be applied to the buttons after the user selects an answer in the JavaScript function. After the user moves to the next question, the game will remove the 'button-disable' class to make the buttons functional again. 

  - The earlier models of the game had a background image height of 900px or so. This made the website scrollable in smaller screens but in larger screens, there was white space underneath the footer. It would be terrible user experience for the user to have to scroll up and down a quiz game while playing on a tablet or mobile device. To fix this, I have made the background image 100vh to fill up the user's screen and to avoid having to scroll on the page. This makes the game much more accessible and avoids unnecessary scrolling for the user. However, due to this, it was difficult to make the game more responsive for smaller devices because the homepage container / question area would overlap the footer easily. To fix this, I have made very thorough and specific media queries for most devices for more users to be able to enjoy this game without this issue. For the 'Am I Responsive' website, I have made a special media query for the website to show perfectly on the mobile device viewport. The game is also responsive on the Galaxy Fold. 

  - It was difficult for the game to loop through the levelTwo and levelThree questions. The JavaScript function created would loop through levelOne questions but had issues with iterating through levelTwo questions after the 'Level One Complete' message came up. The code just would not iterate levelTwo questions and would go straight to 'Level Two Completed' message. A fellow Code Institute student on Slack suggested to use a Switch Statement to fix this issue and the game worked perfectly after incorporating this feature. 

  - It was difficult to come up with a way to reset the score and reshuffle the questions at the end of the quiz when the user clicks 'Play Again'. The shuffle in the JavaScript file is not a function so it is not able to be called at specific parts of the game. To fix this issue, I have added an event listener to refresh the entire page when clicked so the score and shuffle will both happen automatically. I have added a note to the user in the 'Game Complete' and 'Game Over' messages explaining to the user the page will refresh for the purpose of reshuffling the questions and resetting the score. 

  - Not so much a bug, but at the beginning of the project I had made my commit messages very brief and simple. Upon receiving feedback from PP1 halfway through this project, I have tried to make my git messages much more descriptive and clear to ensure each git commit is properly documented.

* ### Further Testing

- The website has been tested on different browsers including Chrome, Safari, and Firefox. Large monitors (LG, Dell, Samsung), laptops (MacBook Early 2016, MacBook Pro 2020, ASUS 2021), tablets (iPad Pro), and devices (iPhone 13 Mini, iPhone 13, iPhone 12, iPhone 11, Samsung Galaxy A5, Xiaomi Redmi 9) have been used to check the quality and responsiveness of the game. The entire gameplay was perfectly responsive. 

- Using Google DevTools, I have tested the responsiveness on all of the devices listed below. As mentioned earlier, Nest Hub and Surface Duo are not perfectly responsiveness due to the height viewports. 

![Screenshot of DevTools devices](assets/documentation/devtools.png)

- I have played the game many times to test that the game will give the correct feedback to the user regarding whether the correct or incorrect answer has been selected. As well, whether less than 6 points will go to 'Game Over' and if over 6 points will go to 'Level One Complete'. I have tested to ensure the game will go to 'Game Over' again when the user scores less than 12 in level two, and the user will see 'Level Two Completed' if they score 12 and above. I tested the user will see 'Game Over' when they score under 20 in level three, and will see 'Game Completed' when they score over 20. I have tested the 'Play Again' button to ensure the refresh will reset the user's score and reshuffle all questions in level one, two, and three.

## Deployment

The website was deployed using GitHub Pages. The following steps were taken for the deployment process:

  1. Log in to **[GitHub](https://github.com/)**.
  2. Click on the profile icon to locate **'Your repositories'**. 
  3. On the repository page, click on the repository you wish to deploy.
  4. At the top of the repository, locate the **'Settings'** link and click.
  5. On the Settings page, locate the **'Pages'** section in the left-hand navigation section and click.
  6. On the GitHub Pages page, under **'Source'** click **'Main'**. Click **'Save'**.
  7. Refresh the page and the live link is ready. 

  [View Live Project Here](https://lee-joanne.github.io/cork-paints/)

  The following steps were taken for the cloning process: 

  1. Log in to **[GitHub](https://github.com/)**.
  2. Click on the profile icon to locate **'Your repositories'**. 
  3. On the repository page, click on the repository you wish to clone.
  4. Under **'Code'**, see the different cloning options, HTTPS, SSH, and GitHub CLI. Click the prefered cloning option, and then copy the link provided. 
  5. Open **Terminal**.
  6. In Terminal, change the current working directory to the desired location of the cloned directory.
  7. Type git clone, and then paste the URL copied from GitHub earlier. 
  8. Type **Enter** to create the local clone. 

  ## Credits

* ## Code

- Love Running Project: 
    - Code from the Love Running footer was used to create the footer for this website. The social media icons, links, aria labels, and styles were used from the Love Running project.

- Love Maths Project: 
    - Code from the Love Maths project was taken, such as the function to increment the score when the user gets a correct answer and the DOMContentLoaded event listener. 

- [CSS Scan](https://getcssscan.com/css-box-shadow-examples): 
    - Code was taken from CSS Scan for the box shadowing around the homepage / question area container and buttons.

- [Stack Overflow](https://stackoverflow.com/):
    - Stack Overflow was referred to many times for the development of this website.
    - Code from [this post](https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js) was taken to shuffle the quiz questions in the question arrays. 
    - Code from [this post](https://stackoverflow.com/questions/49589574/location-reload-in-addeventlistener) was taken to refresh the page when the event listener is clicked.
    - Stack Overflow was looked at many times on how to get functions working in general, how to lay out the quiz question buttons, the idea behind the 'button-disabler' (pointer-events: none;) class in CSS file to disable the multiple choice buttons after user selection, etc. 

- [W3 Schools](https://www.w3schools.com/):
    - W3 Schools was also referred to many times for the development of this website, such as how to create event listeners, how to create functions, layout of the objects and arrays for the quiz questions, etc.
    - Code from [this post](https://www.w3schools.com/howto/howto_css_modals.asp) was taken on how to create a functioning modal window for the 'How To Play' button.

- [MDN Web Docs](https://developer.mozilla.org/en-US/):
    - MDN Web Docs was referred to many times as well to create this website. 

- [Sitepoint](https://www.sitepoint.com/simple-javascript-quiz/):
    - Some code from Geo Quiz was inspired from this website on how to create a JavaScript game. This website helped create the first few functions and general blueprint of how to build the game. 

- [ElectroBit](https://electrobit.hashnode.dev/making-a-quiz-game-with-javascript):
    - The idea behind the 'hide' class feature in Geo Quiz was taken from this website on how to create a JavaScript quiz game. This class feature allowed me to call certain HTML elements in the JavaScript whenever I wanted to, to ensure the game worked smoothly.

- Code Institute Tutor Support:
    - Tutor Support was also very helpful in helping me get my functions going. I want to thank everyone who took their time to help me and send me useful links and helped me troubleshoot my code.

- Code Institute: Slack Channel: Peer-Code-Review:
    - I have referred to peer-code-review on Slack to gather ideas on my website. Most notably, I would like to thank [sharpryan20](https://sharpryan20.github.io/ci-project-2/) for the idea of providing feedback back to the user when the user selects an answer, whether it is correct or incorrect with the correct answer shown back to the user. 

- Code Institute: [Dave Horrocks](https://github.com/DaveyJH):
    - Dave Horrocks has been absolutely lovely and jumped on a few Slack calls with me to help walk me through some difficult JavaScript code. Dave helped me kick off the start process of building my website and was super thorough and explained JavaScript concepts very well. He helped me get my first few functions working.

- Code Institute: Slack Channel:
    - Ian Meigh who has helped me with my bug on the Slack channel about why my level two and three questions weren't being called after level one completed. Ian took the time to create a function using a Switch Statement which he kindly shared with me and inspired me to use more Switch Statements in this website. 

- My Mentor:
    - My mentor was a huge help in helping me troubleshoot some issues and going through my code together.

* ### Content

    - Icons throughout the website are taken from [Font Awesome](https://fontawesome.com/).

    - The favicon for Geo Quiz was taken from [Favicon.io](https://favicon.io/emoji-favicons/globe-showing-americas/).

    - Information on the font, Dosis, is taken from [Google Fonts](https://fonts.google.com/specimen/Lora).

    - The table of contents for this README.md was generated by [Ecotrust-Canada Markdown-toc](https://ecotrust-canada.github.io/markdown-toc/).

    - Information on how to clone is taken from [GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

    - I came up with random questions for the quiz game and [Google](www.google.ca) was used to confirm the correct answers. 

* ### Media

    - Background image for the website is taken from [Pexels](https://www.pexels.com/).

* ### Acknowledgements 

    - My mentor for all of his wonderful feedback, helping me with kicking off the coding process, and helping me tackle JavaScript. 

    - Everyone in the Code Institute Slack channel who took their free time to answer my queries and help me throughout my project.

    - The Code Institute tutors who have helped me feel at ease with my JavaScript worries and giving me their helping hand.

    - Dave Horrocks for all of his hard work and dedication to helping all of us in need, taking his free time to jump in meetings with us to walk us through our code.
