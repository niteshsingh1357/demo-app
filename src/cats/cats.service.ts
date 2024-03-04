import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    return this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(name: string): Cat | undefined {
    const cat = this.cats.find((_cat) => _cat.name === name);
    if (!cat) throw new Error(`Cat with the name ${name} not found`);
    return cat;
  }

  findIndexByName(name: string): number {
    const cat = this.findOne(name);
    const index = this.cats.indexOf(cat);
    return index;
  }

  remove(name: string): Cat[] {
    return this.cats.splice(this.findIndexByName(name), 1);
  }
}
