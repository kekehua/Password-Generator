# Password-Generator

The Password generator is a website hosted on https://kekehua.github.io/Password-Generator/ and can be used by going to the site, clicking the generate button, following the prompts, thus generating a password according to the users criteria.

## Acceptance Criteria

The Password generator will meet the following working criterion:

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Functionality

Functions in script.js were editted to add functionality to the site
Window Prompt was generated to ask users how many numbers the password should be
    if/else statements created to reject values under 8 and over 128
Criteria for Capital Letters, Special Letters, and Numbers are recorded through window prompts that record a boolean value
    if statement created to reject answers that decline having any of these criteria
Function created to create password once user answers the requisite window prompts