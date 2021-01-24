import { GraphQLClient } from "graphql-request";

const endpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT as string;
const fetcher = new GraphQLClient(endpoint);

export default fetcher;
