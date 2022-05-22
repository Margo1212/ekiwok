import { Injectable, PipeTransform } from '@nestjs/common';
import { BaseGameRequest } from '@shared';

@Injectable()
export class GameByIdPipe implements PipeTransform {
  transform(value: BaseGameRequest) {
    console.log('🚀 ~ file: game.pipe.ts ~ line 7 ~ GameByIdPipe ~ transform ~ value', value);
    return value;
  }
}
