import { Field, Int, ObjectType } from "type-graphql";
import Functionality from "./Functionality";

@ObjectType()
export default class Tea {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    caffeine: boolean;

    @Field(type => [Functionality])
    functions: Functionality[];

    @Field()
    description: string;
}
