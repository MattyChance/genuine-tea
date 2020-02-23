import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class Functionality {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;
}
