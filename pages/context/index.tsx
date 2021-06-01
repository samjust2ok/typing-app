import * as React from 'react';
import PopupProvider, { usePopupContext } from './popup-context';
const AppProvider: React.FC<{}> = () => {
    return ( 
        <PopupProvider>

        </PopupProvider>
    );
}
 
export {
    AppProvider as default,
    usePopupContext
}