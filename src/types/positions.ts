type Bias = "long" | "short"

enum AssetType {
    Stock = "stock",
    Fund = "fund",
    Crypto = "crypto",
    Index = "index",
}

interface Position {
    id: string,
    created_at: string,
    updated_at: string,
    name: string,
    ticker: string,
    asset_type: AssetType,
    bias: Bias,
    price: number,
    change: number
}

interface PositionNew {
    name: string,
    ticker: string
    asset_type: AssetType,
    bias: Bias,
    justification: string,
}

export type {
    Position,
    PositionNew,
    AssetType,
    Bias
}
