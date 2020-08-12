import { MenuItem } from './interfaces';

export const menu: MenuItem[] = [
  {
    title: 'Меню1',
    href: '/link_to_menu',
    children: [
      {
        title: 'Меню1',
        href: '/link_to_menu',
      },
      {
        title: 'Меню2',
        href: '/link_to_menu',

      },
      {
        title: 'Меню3',
        href: '/link_to_menu',
      },
    ],
  },
  {
    title: 'Меню2',
    href: '/link_to_menu',
  },
  {
    title: 'Меню3',
    href: '/link_to_menu',
    children: [
      {
        title: 'Меню1',
        href: '/link_to_menu',
      },
      {
        title: 'Меню2',
        href: '/link_to_menu',
        children: [
          {
            title: 'Меню1',
            href: '/link_to_menu',
          },
          {
            title: 'Меню2',
            href: '/link_to_menu',

          },
          {
            title: 'Меню3',
            href: '/link_to_menu',
          },
        ],

      },
      {
        title: 'Меню3',
        href: '/link_to_menu',
      },
    ],
  },
];
export default {};
