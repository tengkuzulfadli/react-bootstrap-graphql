const githubQuery = (pageCount, queryString) => {
  return {
    query: `
      {
        viewer {
          name
        }
        search(query: "${queryString} user:tengkuzulfadli sort:updated-asc", type: REPOSITORY, page: ${pageCount}){
          repositoryCount
          edges {
            cursor
            node {
              ... on Repository {
                name
                description
                id
                url
                viewerSubscription
                licenseInfo {
                  spdxId
                }
              }
            }
          }
        }
      }
    `,
    };
  };
  export default githubQuery;