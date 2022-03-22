import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

import { ICar } from '../interfaces/car';
import { jsonEval } from '@firebase/util';

@Injectable()


export class CarApiService {

  // Service wrapper around the native firestore SDK's
  // collectionReference and Query types.
  carsDataCollection:AngularFirestoreCollection<ICar>;

  // Representation of any set of cars over any amount of time.
  carsData!:Observable<ICar[]>;

  // Array to hold all cars.
  allCarsData!:ICar[];

  // Error Message.
  errorMessage!:string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore) {
    // Connect to the Database.
    this.carsDataCollection=_afs.collection<ICar>("cars_data");
  }

  getCarData():Observable<ICar[]> {
    this.carsData = this.carsDataCollection?.valueChanges();
    this.carsData?.subscribe(
      data => console.log("getCarsData:+" + JSON.stringify(data))
    )
    return this.carsData;
  }

  addCarData(car:ICar): void {
    this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));
  }

  delCarData(carId:string):void{
    this.carsData = this.carsDataCollection.valueChanges({idField:'id'});
    this.carsData?.subscribe((data) =>
      console.log('getCarsData:+' + JSON.stringify(data))
    );
    this.carsDataCollection.doc(carId).delete();
  }


  private handleError (err:HttpErrorResponse) {
    console.log('CarApiService: ' +err.message);
    return throwError(err.message);
  }
}
