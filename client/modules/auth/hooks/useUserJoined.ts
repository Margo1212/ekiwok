import { UserJoinedResponse } from '@shared';
import { useSubscribe } from 'modules/common/hooks/useSubscribe';

export const useUserJoined = () => useSubscribe<UserJoinedResponse>('new-user');
