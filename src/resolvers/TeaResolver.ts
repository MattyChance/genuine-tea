import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import {teas, TeaData} from "../data";
import Tea from "../schemas/Tea";

@Resolver(of => Tea)
export default class {
    @Query(returns => Tea, { nullable: true })
    teaById(@Arg("name") id: number): TeaData | undefined {
        return teas.find(tea => tea.id === id);
    }

    @Query(returns => Tea)
    teasByFunctionality(@Arg("functionalityId") id: number): TeaData[] {
        return teas.filter(tea => {
            return tea.functionalities.includes(id);
        });
    }
}
