import { Position } from "./positions";

interface Portfolio {
    created_at: string,
    updated_at: string,
    id: string,
    name: string,
    cash_balance: number,
    total_balance: number,
    positions: Position[]
}

interface PortfolioNew {
    name: string,
    balance?: number,
}

export type {
    Portfolio,
    PortfolioNew
}