export interface FunctionalityData {
    id: number;
    name: string;
    description: string;
}

export interface TeaData {
    id: number;
    name: string;
    category: string;
    caffeine: boolean;
    functionalities: number[];
    description: string;
}

export const functionalities: FunctionalityData[] = [
    { id: 1, name: "energize", description: "" },
    { id: 2, name: "calm", description: ""},
    { id: 3, name: "cleanse", description: "" },
    { id: 4, name: "nourish", description: "" },
];

export const teas: TeaData[] = [
    { id: 1, name: "jasmine", caffeine: false, category: "", description: "", functionalities: [3, 4]},
    { id: 2, name: "golden horse eyes", caffeine: true, category: "", description: "", functionalities: [1, 4]},
    { id: 3, name: "long jin", caffeine: false, category: "", description: "", functionalities: [2, 4]},
    { id: 4, name: "pu er", caffeine: false, category: "", description: "", functionalities: [2, 3]},
    { id: 5, name: "british breakfast", caffeine: true, category: "", description: "", functionalities: [1]},
];
