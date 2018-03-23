<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

  * Middleware, as applied to express, are function that have access to the request and response param, and also a third parameter to be included called `next`. The `next()` function moves onto the next middleware function.
  * Sessions, as applied to express, are places to store data that a web application can use to perfom certain actions based on the saved data. The data saved in these sessions are saved for future request / response cycles from the server being requested.
  * bcrypt is middleware hashing function used to hash / encrypt passwords.
  * JWT stands for JSON Web Tokens. JWTs are an open standard of encrpyting and passing data via JSON format.

1.  What does bcrypt do in order to prevent attacks?

  * bcrypt using hashing and also adds `Salt`, or timed response, to the hashing portion of the password. Depending on the Salt, this can signficanltly blunt malicious password hacking attempts, through Rainbow Table attacks, by greatly slowing down the ability to get a complete Rainbow Table of hashed passwords.

1.  What are the three parts of the JSON Web Token?
  * JWTs consist of three sections:
    1. Header, which has two parts: type and algorithm used for encrypting. Example: `{ "typ": "JWT", "alg": "HS256" }`
    2. Payload, the main data being passed
    3. Signature, a combination of these hashed components: header, payload, secret
