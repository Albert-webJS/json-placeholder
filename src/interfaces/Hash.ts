export type HashType = Record<string, RootHash>


type HashMain = {
    id: string;
    content: string;
}

type HashContent = {
    key: string
}

export interface Hash {
    hash1: HashMain;
    hash2: HashMain[];
    hash3: HashContent;
    hash4: HashContent;
}

export interface RootHash {
    hash: Hash;
}



