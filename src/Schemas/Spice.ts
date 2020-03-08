import { Field, Int, ObjectType } from "type-graphql";
import Functionality from "./Functionality";
import Flower from "./Flower";
import Fruit from "./Fruit";
import Tea from "./Tea";

@ObjectType()
export default class Spice {
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
    //     flowers: Flower[],
    //     fruits: Fruit[]
    // }
}
