import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore';

import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

import { Car, ICar } from '../interfaces/car';
import { jsonEval } from '@firebase/util';

@Injectable()
export class CarApiService {
  // Service wrapper around the native firestore SDK's
  // collectionReference and Query types.
  private carsDataCollection: AngularFirestoreCollection<ICar>;
  items!:Observable<ICar[]>;

  // Representation of any set of cars over any amount of time.
  carsData!: Observable<ICar[]>;

  // Array to hold all cars.
  allCarsData!: ICar[];

  // Error Message.
  errorMessage!: string;

 


  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    // Connect to the Database.
    this.carsDataCollection = _afs.collection<ICar>('cars_data');
    this.items = this.carsDataCollection.valueChanges({idField:'id'});
  }

  getCarData(): Observable<ICar[]> {
    this.carsData = this.carsDataCollection?.valueChanges();
    this.carsData?.subscribe((data) =>
      console.log('getCarsData:+' + JSON.stringify(data))
    );
    return this.carsData;
  }

  addCarData(car: ICar): void {
    this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));
  }

  // delCarData(carId: string) {
  //   this.carsData = this.carsDataCollection.valueChanges({ idField: 'CarID' });
  //   this.carsDataCollection.doc(carId).delete();
  // }

  // delCarData(carId:string) {  

  //  const id : ICar = {}

  // }

  private handleError(err: HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return throwError(err.message);
  }
}
