import { MenuEntry, menuStatus } from 'pixelswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pixelswapcoin.com',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pixelswapcoin.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: '/competition',
    status: menuStatus.SOON,
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pixelswapcoin.com',
      },
      {
        label: 'Tokens',
        href: 'https://pixelswapcoin.com/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pixelswapcoin.com/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pixelswapcoin.com/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.pixelswapcoin.com/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.pixelswapcoin.com',
      },
      {
        label: 'Github',
        href: 'https://github.com/pixelswap-proojects',
      },
      {
        label: 'Docs',
        href: 'https://docs.pixelswapcoin.com',
      },
    ],
  },
]

export default config
