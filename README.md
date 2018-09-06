# Angular Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Docker-compose

Run `docker-compose up -d`. Open [localhost here](http://localhost:4200).

Using Windows? Check IP of your VM with `docker-machine ip default` and then open `<your VM ip>:4200`.

## Done experimenting? 
- Stop container with `docker-compose stop` and then remove it with `docker-compose rm`.
- You can also add `--rm` after `docker-compose up -d` command, so it automatically kills it off.
    
# Unit & e2e tests 
Run `npm install` first.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
    
## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
