# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Components :blue_car:

- **car-edit:**  :pencil:  </br>
   -This component allows you to edit the car data or create a new car. </br>
   -In the owner field, just add the ID of the owner who is registered.
   
- **car-list:**  :taxi: :oncoming_automobile: </br>
   -This component lists the photo and the name of the existing cars, allowing you to click on the name to be modified or click on the ADD button to enter a new car.
   
- **car-owner-list:**  :car: :man: :woman: </br>
   -This component lists the photo and name of the car and the name of the owner in case it exists, you have the possibility to edit this owner.
   
- **owner-edit:** :pencil: :person_with_pouting_face:  </br>
   -This component allows you to edit or add owner. </br>
   -Once edited it directs you to owner-list
   
- **owner-list:**    :boy:  </br>
   -This component shows all existing owners.</br>
   -Allows you to choose one or more owners to delete.
   -Allows you to specifically edit an owner or add a new one.
   -Once edited it directs you to car-list
    

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
