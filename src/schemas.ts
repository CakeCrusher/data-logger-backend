export const NEW_TEST = `
mutation MyMutation($words: String!) {
  insert_test(objects: {words: $words}) {
    returning {
      id
    }
  }
}
`;