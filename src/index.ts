import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import FunctionalityResolver from "./resolvers/FunctionalityResolver";
import TeaResolver from "./resolvers/TeaResolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [FunctionalityResolver, TeaResolver],
        emitSchemaFile: true,
    });

    const server = new GraphQLServer({
        schema,
    });

    server.start(() => console.log("Server is running on http://localhost:4000"));
}

bootstrap();
