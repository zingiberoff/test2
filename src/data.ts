import { MenuItem } from './interfaces';

export const menu: MenuItem[] = [
  {
    title: 'Меню',
    href: '/link_to_menu',
  },
  {
    title: 'Меню',
    href: '/link_to_menu',
  },
  {
    title: 'Меню',
    href: '/link_to_menu',
    children: [
      {
        title: 'Меню',
        href: '/link_to_menu',
      },
      {
        title: 'Меню',
        href: '/link_to_menu',
      },
      {
        title: 'Меню',
        href: '/link_to_menu',
      },
    ],
  },
];
export default {};
