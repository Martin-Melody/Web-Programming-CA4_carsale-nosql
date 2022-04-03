// import { stringify } from 'querystring';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";

export interface ICar{
    make:string;
    model:string;
    year:string;
    imageURL:string;
}

export class Car implements ICar {

    make:string;
    model:string;
    year:string;
    imageURL:string;

    constructor(make:string,model:string,year:string,imageURL:string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.imageURL = imageURL;
    }
}