import { Field, Int, ObjectType } from "type-graphql";
import Functionality from "./Functionality";

@ObjectType()
export default class Flower {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field(type => [Functionality])
    functions: Functionality[];

    // todo: taste good with
    // @Field()
    // tasteGoodWith: {
    //     teas: Tea[],
    //     fruits: Flower[],
    //     spices: Fruit[]
    // }
}
