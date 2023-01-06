# Dating App Frontend
By Rafaela, Evin, & Emon
____

## Technologies used on the Frontend:
- React, CSS/Bootstrap, Netlify

## Technologies used on the Backend:
- Django/Python, Heroku
___

## The Project
- We decided to create a dating app! If you have not created a profile before, you can click on "Create Profile". If you have already made an account you can click "Login". Once you create a profile, you will be prompted to log in to your account. When logged into you account, you can swipe left or right on the profiles on the home page. You can edit your information (top left person icon), after you enter your password. Here you are able to delete your account as well, and we have a modal implemented where it will ask you if you are sure that you want to delete your account. We also have a chat icon (top right), where we were hoping to be able to save messages, but have a few fake messages displayed at the moment. The heart icon at the top of the page brings you to the home page, where you can continue swiping through profiles.

## Difficulties:
### We had a couple bugs:
- When on the edit page, where prompted to enter your password before editing the information, you can input any password, and it changes it even in the database.
- When refreshing the page, it automatically logs you out
- After refreshing the page, and it logs you out, none of the other icons work until you refresh the page again.

## What we would have liked to add:
- As mentioned above, we really wanted to allow users to message people that they "liked", and save their messages after logging out.
- It also would have been nice to allow users to see profiles based off of their dating preferences (such as age, gender, etc.), instead of seeing all profiles in the database.

## Project deployed on Netlify:
`https://singular-druid-6c25ce.netlify.app/`
___________________________________

## Sources:
- React-Card-Flip:
`https://www.npmjs.com/package/react-card-flip`

- React Tinder Card:
`https://www.npmjs.com/package/react-tinder-card/v/1.1.0`

- Trigger swipe by button:
`https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js`

- Material UI icons:
`https://mui.com/material-ui/material-icons/`
