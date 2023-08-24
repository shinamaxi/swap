import { ChainId } from '@uniswap/sdk'


const version = Math.floor(Math.random() * (100 - 1)) + 1

const NETWORK_CHAIN_ID: ChainId = process.env.REACT_APP_CHAIN_ID ? parseInt(process.env.REACT_APP_CHAIN_ID) : ChainId.WANNSEEMAINNET
const Router_MAP: { [key in ChainId]: string } = {
  [ChainId.MAINNET]: `https://raw.githubusercontent.com/MXCzkEVM/wannseeswap-tokenlist/main/tokenlist-mainnet.json?version=${version}`,
  [ChainId.WANNSEE]: `https://raw.githubusercontent.com/MXCzkEVM/wannseeswap-tokenlist/main/tokenlist.json?version=${version}`,
  [ChainId.WANNSEEMAINNET]: `https://raw.githubusercontent.com/MXCzkEVM/wannseeswap-tokenlist/main/tokenlist-mainnet.json?version=${version}`,
  [ChainId.HARDHAT]: '',
}

const Info_MAP: { [key in ChainId]: string } = {
  [ChainId.MAINNET]: `https://uniswap.info`,
  [ChainId.WANNSEE]: `https://wannsee-swap-info.mxc.com`,
  [ChainId.WANNSEEMAINNET]: `https://swap-info.mxc.com`,
  [ChainId.HARDHAT]: '',
}

const TaxToken_MAP: any = {
  [ChainId.MAINNET]: [],
  [ChainId.WANNSEE]: [
    // Crab Token
    "0xE642170eE88889e3539567C467474e09f10D6e30",
    // Gin1689 Coin
    "0x3200b5Aa2C27bd0771F9E1378b175d2729d53402",
    // Maxis Token
    "0x1c457428fA7fdE811641688029869a545121C00c"
  ],
  [ChainId.WANNSEEMAINNET]: [],
  [ChainId.HARDHAT]: [],
}

// the Uniswap Default token list lives here
// export const DEFAULT_TOKEN_LIST_URL = 'tokens.uniswap.eth'
export const DEFAULT_TOKEN_LIST_URL = Router_MAP[NETWORK_CHAIN_ID]
export const INFO_URL = Info_MAP[NETWORK_CHAIN_ID]
export const TAX_TOKEN = TaxToken_MAP[NETWORK_CHAIN_ID]


// 'https://raw.githubusercontent.com/MXCzkEVM/wannseeswap-tokenlist/main/tokenlist.json?version=7'
// https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json

// export const DEFAULT_LIST_OF_LISTS: string[] = [
//   DEFAULT_TOKEN_LIST_URL,
//   't2crtokens.eth', // kleros
//   'tokens.1inch.eth', // 1inch
//   'synths.snx.eth',
//   'tokenlist.dharma.eth',
//   'defi.cmc.eth',
//   'erc20.cmc.eth',
//   'stablecoin.cmc.eth',
//   'tokenlist.zerion.eth',
//   'tokenlist.aave.eth',
//   'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
//   'https://app.tryroll.com/tokens.json',
//   'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
//   'https://defiprime.com/defiprime.tokenlist.json',
//   'https://umaproject.org/uma.tokenlist.json'
// ]

export const DEFAULT_LIST_OF_LISTS: string[] = [DEFAULT_TOKEN_LIST_URL]
