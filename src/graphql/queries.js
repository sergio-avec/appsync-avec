/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEstablishment = /* GraphQL */ `
  query GetEstablishment($params: QueryGetEstablishmentParamsInput!) {
    getEstablishment(params: $params) {
      id
      name
      description
      location {
        lat
        lng
      }
      cep
      fullAddress
      neighborhood
      city
      state
      slug
    }
  }
`;
