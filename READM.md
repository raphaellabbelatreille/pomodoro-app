# Frontend Mentor - Pomodoro app solution

This is a solution to the [Pomodoro app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Set a pomodoro timer and short & long break timers
- Customize how long each timer runs for
- See a circular progress bar that updates every minute and represents how far through their timer they are
- Customize the appearance of the app with the ability to set preferences for colors and fonts

### Screenshot

<!--![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**
-->

### Links

- Solution URL: [Add solution URL here](https://raphaellabbelatreille.github.io/pomodoro-app/)
<!--- Live Site URL: [Add live site URL here](https://your-live-site-url.com)-->

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- SCSS Grid
- Mobile-first workflow
- SCSS Animation propertie
- transform properties
- Javascript

### What I liked learning
```scss
li {
  &:has(input:checked){
    &.blue {
      background-color: $bleuNeon ;
    }
    &.red {
      background-color: $rougeNeon ;
    }
    &.purple {
      background-color: $poupleNeon ;
    }
  }
  &:has(input:not(:checked)) {
    background-color: transparent;
  }
}
```
```js
function updateTimerDisplay(){
    console.log(currentDuration)
    let minutes = Math.floor(currentDuration / 60);
    let seconds = currentDuration - minutes*60;
    if (seconds<10){
        seconds = "0"+seconds
    };
    pomodoroTimer.innerText = minutes + ":" + seconds;
    console.log(currentDuration + " sur " + duration)
    pomodoroBar.style.animation = "progress-animation "+duration +"s linear 0s 1 forwards"
}
```

### Continued development

SCSS (and by extension CSS) {
  I want to continue to learn more about the properties such as ":has(something)" and "::checked"
}
JS {
  I must master the usage of Interval and its function (like setInterval()).
  CSS interaction via Javascript is still something I must master.
}


### Useful resources

- [ChatGPT](https://chatgpt.com/) - This helped me as I have never programed a regular clock before. It provided me with knowledge I needed to start this project.

## Author

- Website - [Raphaël Labbé-Latreille]()
- Frontend Mentor - [Undefinde]()
- Twitter - [Undefined]()

**These links leads nowhere for now, I will update them once I start using these platforms more**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
