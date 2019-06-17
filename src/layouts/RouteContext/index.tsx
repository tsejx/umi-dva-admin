import { createContext } from 'react';
import { MenuDataItem } from '@/typings';
import { Settings } from '@/defaultSettings';

interface RouteContextProps extends Partial<Settings> {
    menuData?: MenuDataItem;
}

const routeContext: React.Context<RouteContextProps> = createContext({});

export default routeContext;
