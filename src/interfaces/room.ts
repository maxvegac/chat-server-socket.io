export interface Room {
    modes?: string;
    password?: string;
    topic?: string;
    isRegistered: boolean;
    createdAt: Date;
    updatedAt: Date;
    expirationDate: Date;
    owner: {
        email: string;
    };
    coowner: {
        email: string;
    };
    levelList: [
        {
            name: string;
            level: bigint;
            symbol: string;
        }
    ];
    accessList: [
        {
            email: string;
            level: bigint;
        }
    ];
}