import React, {
  useState, createContext, ReactNode, useContext,
} from 'react';

export type IUIContext = {
  subscribe: {
    show: boolean;
    toggleSubscribe: () => void;
  };
};

export const UI_CONTEXT_INITIAL_VALUES: IUIContext = {
  subscribe: {
    show: false,
    toggleSubscribe: () => null,
  },
};

const UIContext = createContext<IUIContext>(UI_CONTEXT_INITIAL_VALUES);

interface UIContextProviderProps {
  children: ReactNode;
}

export function useUIContext() {
  return useContext(UIContext);
}

const UIContextProvider = ({ children }: UIContextProviderProps) => {
  const [show, setShow] = useState<IUIContext['subscribe']['show']>(
    UI_CONTEXT_INITIAL_VALUES.subscribe.show,
  );

  const toggleSubscribe = () => {
    setShow(!show);
  };

  const uiContext: IUIContext = {
    subscribe: {
      show,
      toggleSubscribe,
    },
  };

  return <UIContext.Provider value={uiContext}>{children}</UIContext.Provider>;
};

export default UIContextProvider;
