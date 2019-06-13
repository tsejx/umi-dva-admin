import React from 'react'
import { string } from 'prop-types';

declare module '*.css';
declare module '*.less';

export type WithFalse<T> = T | false;

export interface MenuDataItem {
    authority?: string[] | string;
    children?: MenuDataItem[];
    hideChildrenInMenu?: boolean;
    hideInMenu?: boolean;
    icon?: string;
    locale?: string;
    name?: string;
    path?: string;
    [key: string]: any;
}

