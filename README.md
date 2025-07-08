# CmAuthForm

Common auth forms for quick auth pages development


## Instalation 

```bash
npm i mc-auth-form

```

## Quick common auth forms
Out of the box login and signup form with some commonly used validation for email and password

### Login form

Uses email and password with some default strength(1 number, 1 special char, 1 Uppercase, 1 lowercase)

```html
    <cm-auth-form-login (onFormSubmit)="onFormSubmit($event)">
    <h2 heading>Sign in</h2>
    <a link routerLink="signup">Sign up here</a>
    </cm-auth-form-login>
```

### Signup form

Uses email and password with repeat password (same validation with password being same as repeat password as addition)

```html
     <cm-auth-form-signup (onFormSubmit)="onFormSubmit($event)">
    <h2 heading>Sign up</h2>
    <a link routerLink="/">Sign in here</a>
    </cm-auth-form-signup>
```