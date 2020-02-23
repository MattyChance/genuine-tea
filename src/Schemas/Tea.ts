import { Field, Int, ObjectType } from "type-graphql";
import Functionality from "./Functionality";
import TeaCategory from "./TeaCategory";

@ObjectType()
export default class Tea {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    category: TeaCategory;

    @Field()
    caffeine: boolean;

    @Field(type => [Functionality])
    functions: Functionality[];

    @Field()
    description: string;
}
