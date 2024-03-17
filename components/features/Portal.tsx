'use client'

import React, {FC, useEffect, useState} from 'react'
import { ReactNode, ReactElement } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
    children: ReactNode,
    onClickHandler?: () => void
    className: string
}

export const Portal: FC<PortalProps> = ({children, className, onClickHandler}) => {
    
    const [container, setContainer] = useState<HTMLElement | null>(null);

    const onClickHandlerPortal = () => {
      if(onClickHandler){
        onClickHandler()
      }
    }
  
    useEffect(() => {
      const portalContainer = document.createElement('div');
      portalContainer.className = className
      portalContainer.addEventListener('click', onClickHandlerPortal)
      document.body.appendChild(portalContainer);
      setContainer(portalContainer);
  
      return () => {
        document.body.removeChild(portalContainer);
        document.removeEventListener('click', onClickHandlerPortal)
      };
    }, []);
  
    return container ? ReactDOM.createPortal(children, container) : null;
};