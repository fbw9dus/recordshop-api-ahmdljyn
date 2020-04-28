const {check} = require('express-validator')

exports.userValidationRules = [
    // check email
    check('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Bitte prüf deine Email-Adresse'),
    // check firstname
    check('firstName')
      .exists()
      .trim()
      .withMessage('Vorname ist ein Pflichtfeld'),
    // password
    check('password')
      .isLength({ min: 10 })
      .withMessage('Das Passwort muss mindestens 10 Zeichen lang sein')
  ]