import { BRANDS_SEEED } from './data/brands.seed';
import { CARS_SEEED } from './data/cars.seed';
import { Injectable } from '@nestjs/common';


@Injectable()
export class SeedService {

    populateDB() {
        return BRANDS_SEEED;
    }

}
