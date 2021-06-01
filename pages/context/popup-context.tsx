import * as React from 'react';
import { PopupEnum } from '../constants';

export interface PopupContextProps {
    children: React.ReactNode;
}

type PopupState = Partial<Record<PopupEnum,boolean>>
interface ContextInterface {
    overlays: PopupState;
    setOverlay: (key?: keyof PopupState) => void;
}

const Context = React.createContext<ContextInterface | null>(null);

const PopupProvider: React.FC<PopupContextProps> = ({ children }) => {
  const [overlays, set] = React.useState<PopupState>({
    
  });

  const setOverlay = React.useCallback(
    (key?: PopupEnum) => {
      const newOverlays = {} as PopupState;
      Object.keys(overlays).forEach((k) => {
        newOverlays[k as unknown as PopupEnum] = false;
      });
      if (key) {
        newOverlays[key as unknown as PopupEnum] = true;
      }
      set(newOverlays);
    },
    [overlays]
  );

  return (
    <Context.Provider
      value={{
        overlays,
        setOverlay,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const usePopupContext = () => React.useContext(Context);

export { PopupProvider as default, usePopupContext };

