import { NewRoundPayload } from '@shared';
import { useSubscribe } from 'modules/common/hooks/useSubscribe';

export const useNewRound = () => useSubscribe<NewRoundPayload>('new-round') ?? undefined;
