import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import {FunctionalityData, functionalities, teas, TeaData} from "../data";
import Functionality from "../schemas/Functionality";

@Resolver(of => Functionality)
export default class {
    @Query(returns => Functionality, { nullable: true })
    functionalityByName(@Arg("name") name: string): FunctionalityData | undefined {
        return functionalities.find(functionality => functionality.name === name);
    }
}
