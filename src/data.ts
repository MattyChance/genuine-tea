export interface FunctionalityData {
    id: number;
    name: string;
    description: string;
}

export interface TeaData {
    id: number;
    name: string;
    category: string;
    caffeine: number;
    functionalities: number[];
    description: string;
}

export const functionalities: FunctionalityData[] = [
    { id: 1, name: "energize", description: "Use the tea to wake up your body and your mind. Be ready for the best of yourself" },
    { id: 2, name: "calm", description: "Use the tea to sooth, to relax, to breath into the beauty of life"},
    { id: 3, name: "cleanse", description: "Use the tea to cleanse, to feel light and good" },
    { id: 4, name: "nourish", description: "Use the tea to nourish, to brighten up your elegance" },
];

export const teas: TeaData[] = [
    { id: 1, name: "jasmine", caffeine: 0, category: "", description: "", functionalities: [3, 4]},
    { id: 2, name: "golden horse eyes", caffeine: 3, category: "", description: "", functionalities: [1, 4]},
    { id: 3, name: "long jin", caffeine: 2, category: "", description: "", functionalities: [2, 4]},
    { id: 4, name: "pu er", caffeine: 5, category: "", description: "", functionalities: [2, 3]},
    { id: 5, name: "british breakfast", caffeine: 8, category: "", description: "", functionalities: [1]},
];
