import { BRANDS_SEEED } from './data/brands.seed';
import { CARS_SEEED } from './data/cars.seed';
import { Injectable } from '@nestjs/common';
import {CarsService} from "../cars/cars.service";


@Injectable()
export class SeedService {

    constructor(
        private  readonly  carsService: CarsService,
    ) {}

    populateDB() {
        this.carsService.fillCarsWithSeedData( CARS_SEEED );
        return ' Seed executed ';
    }

}
