##  Symfony starter pack including all essential features to work with connected users

This starter pack is made to be ready to work quickly on symfony projects with using user must-have features. Fully functional and very easy to customize for your own use.

You can preview here:

https://starterpack.simschab.fr/


Download it and make a composer install.
```
composer install
```

Make your .env.local and create your database:
```
bin/console d:d:c
```

Make the migration to build database:
```
bin/console d:m:m
```

### Symfony Functionnality :

- User Login/logout. (on static page or modal window)
- Redirect user on last page visited after login using the login static page
- Stay on current page after login using modal.
- Active Remember me.
- User Reset Password.
- Send confirmation Email.
- Main Controller + Main Home.
- Boostrap 5 forms style declared in twig.yaml
- Locale set on Fr
- Mail config for MailTrap in dev env.
- Full Code comments & infos. 
- Command to regenerate a app secret key

### Basics to work and personalize quickly :

- Full head & Meta content ready to custom.
- Boostrap 5 styles and Js.
- Google font
- App Icon
- Reset Css stylesheet.
- Sass starter integration easy to custom.
- Full public rep with base directories : asssets/css/images/js/+ default favicon.png
- Default app.js with simple JS Vanilla ApiFecth exemple (Load on home).
- Little JQuery toggle example to display/hide content you can use.
- Header / Main / Footer

### Made with :

- Symfony Version 5.4.7
- Php version 7.4
- Sass (need Live Sass Compiler extention in VSC)
- Boostrap
