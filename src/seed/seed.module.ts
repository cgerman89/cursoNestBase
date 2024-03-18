import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import {CarsModule} from "../cars/cars.module";
import { BrandsService } from 'src/brands/brands.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ CarsModule ],
})
export class SeedModule {}
