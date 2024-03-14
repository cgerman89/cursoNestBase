import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {

    private cars : Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla',
        // },
    ];


    findAll(){
        return this.cars;
    }

    findOneById(id: string) {

        const car = this.cars.find(car => car.id === id);
        
        if ( !car )
              throw new NotFoundException(` Car con id '${ id }' no found `);
        
        return car;
    }  
    
    create ( createCarDto: CreateCarDto ){
        
        const car : Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push( car );
        return car;
    
    }

    updated( id:string, updateCarDto: UpdateCarDto){
        let carDB = this.findOneById( id );
        return this.cars.map( car => {
             if ( car.id === id ){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }

                return carDB;
             }
             return car;
        });
    }

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;

    }


}
