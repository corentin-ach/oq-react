export type Quality = {
    water: boolean;
    plastic: boolean;
    seal: boolean;
    date: string;
    observation: string;
  }

export type Spot = {
    coords: Array<number>,
    name: string
    quality: Quality
    id: string
    status: boolean
    bySearch: boolean
    area: number
    votes?: Array<Quality>
  }
