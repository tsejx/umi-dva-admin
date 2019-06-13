import { EffectsCommandMap } from 'dva';
import { AnyAction } from 'redux';
import { GlobalModelState } from './global';
import { MenuModelState } from './menu';

export type Effect = (
    action: AnyAction,
    effects: EffectsCommandMap & { select: <T>(func: (state: ConnectState) => T) => T },
) => void;

export interface ConnectState {
    global: GlobalModelState,
    menu: MenuModelState,
}

// export type Dispatch = <P = any, C = (payload: P) => void>(
//     action: {
//         type: string;
//         payload?: P;
//         callback?: C;
//         [key: string]: any;
//     }
// ) => any;