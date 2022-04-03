import { Component, Input, OnInit } from '@angular/core';
import { CarApiService } from '../services/car-api.service';
import { ICar } from '../interfaces/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarApiService]
})
export class CarComponent implements OnInit {

  @Input() carData!:ICar
  carImageWidth:number=400;

  constructor(private _carAPIService:CarApiService) { 
    
  }

  ngOnInit(): void {
  }


  // deleteCar(carId:string){
  //   this._carAPIService.delCarData(carId);
  // }

}
