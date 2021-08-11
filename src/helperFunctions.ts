import { FileSnippetOut } from "./types";

const fetch = require("node-fetch");

export const fetchGraphQL = async (
  schema: string,
  variables: any = {}
): Promise<any> => {
  const graphql = JSON.stringify({
    query: schema,
    variables,
  });
  const requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "secret",
    },
    body: graphql,
  };
  const database_url = "https://voon-demo.herokuapp.com/v1/graphql";
  const res = await fetch(database_url, requestOptions).then((res: Response) =>
    res.json()
  );
  return res;
};