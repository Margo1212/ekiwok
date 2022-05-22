import { PointScoredPayload } from '../../../../shared/Game';
import { useSubscribe } from './useSubscribe';

export const usePointScored = () => useSubscribe<PointScoredPayload>('point-scored');
