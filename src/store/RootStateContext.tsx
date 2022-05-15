import { createContext, useContext } from 'react';
import userStore from './user/UserStore';
import modalStore from './modal/ModalStore';
import { RootStore } from '../@types';

const RootStateContext = createContext<RootStore>(
    {} as RootStore
);

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {

    return (
        <RootStateContext.Provider
            value={{ userStore, modalStore }}
        >
            {children}
        </RootStateContext.Provider>
    );
}

export const useRootState = () => {
    const context = useContext(RootStateContext);
    if(!context) {
        throw new Error('useRootState must be used within a RootStateProvider');
    }
    return context;
}