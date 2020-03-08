import { Arg, Query, Resolver } from "type-graphql";
import {teas, TeaData} from "../data";
import Tea from "../schemas/Tea";

@Resolver(of => Tea)
export default class {
     /*
    * Get a tea by its id
    */
    @Query(returns => Tea, { nullable: true })
    teaById(@Arg("name") id: number): TeaData | undefined {
        return teas.find(tea => tea.id === id);
    }

    /*
    * Get a list of teas by a functionality ID and filter by caffeined or decaffeined
    */
    @Query(returns => Tea)
    teasByFunctionality(@Arg("functionalityId") id: number, @Arg("withCaf") withCaf: boolean): TeaData[] {
        const allTeas = teas.filter(tea => {
            return tea.functionalities.includes(id);
        });
        if (withCaf) {
            return allTeas.filter((tea) => tea.caffeine > 0)
        } else {
            return allTeas.filter((tea) => tea.caffeine === 0)
        }
    }
}
