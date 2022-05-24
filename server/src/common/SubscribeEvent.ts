import { SubscribeMessage } from '@nestjs/websockets';
import { ClientEvent } from '@shared';

export const SubscribeEvent = (event: ClientEvent) => SubscribeMessage<ClientEvent>(event);
