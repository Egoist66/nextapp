'use client';

import {Provider} from 'react-redux'
import { store } from './store';
import { FC } from 'react';

const Providers: FC<{children: React.ReactNode}> = ({children}) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers