/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const allEstablishment = /* GraphQL */ `
  query AllEstablishment {
    allEstablishment {
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
