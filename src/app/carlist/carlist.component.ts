import { Component, OnInit } from '@angular/core';
import { CarApiService} from '../services/car-api.service';
import { ICar, Car} from "../interfaces/car";
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
  providers: [CarApiService]
})
export class CarlistComponent implements OnInit {
  carsData!:ICar[];

  constructor(private _carAPIService:CarApiService) { }

  ngOnInit() {
    this._carAPIService.getCarData().subscribe(carsData =>
      { this.carsData = carsData});
  }

  addTheCar(make:string, model:string, year:string,imageURL:string):boolean{
    let tempCar:ICar;
    tempCar=new Car(make,model,year,imageURL);
    this._carAPIService.addCarData(tempCar);
    return false;
  }

}
