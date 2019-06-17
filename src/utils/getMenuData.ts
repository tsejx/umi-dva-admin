import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';
import { formatMessage } from 'umi-plugin-react/locale';
import { MenuDataItem } from '../typings';

export interface FormatterProps {
  data: MenuDataItem[];
  parentName?: string;
  authority?: string[] | string;
}

// Conversion routes to menu
function formatter(props: FormatterProps): MenuDataItem[] {
  const { data, parentName, authority } = props;

  return data
    .filter(item => item && item.name && item.path)
    .map((item = { path: '' }) => {
      if (!item.name) {
        return item;
      }

      const { name } = item;

      const locale = `${parentName || 'menu'}.${name}`;

      const localeName = formatMessage({ id: locale, defaultMessage: name });

      const result: MenuDataItem = {
        ...item,
        name: localeName,
        locale,
        // authority: item.authority || parentAuthority,
        routes: null,
      };

      if (item.routes) {
        const children = formatter({
          ...item,
          data: item.routes,
          // authority: item.authority,
          parentName: locale,
        });
        // Reduce memory usage
        result.children = children;
      }

      return result;
    });
}

const memoizeOneFormatter = memoizeOne(formatter, isEqual);

export default memoizeOneFormatter;
