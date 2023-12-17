# name: Publish

# on:
#   push:
#     branches: [ "main" ]
#   pull_request:
#     branches: '*'
# permissions:
#   contents: read # for checkout
# jobs:
#   quality:
#     runs-on: ubuntu-latest
#     steps:
#     - uses: actions/checkout@v3
#     - name: Setup Node.js
#       uses: actions/setup-node@v3
#       with:
#         node-version: "lts/*"
#         cache: 'npm'
#     - run: npm ci
#     - run: npm test

#   publish:
#     runs-on: ubuntu-latest
#     if: ${{ github.ref == 'refs/heads/main' }}
#     needs: [quality]
#     permissions:
#       contents: write # to be able to publish a GitHub release
#       issues: write # to be able to comment on released issues
#       pull-requests: write # to be able to comment on released pull requests
#       id-token: write # to enable use of OIDC for npm provenance    
#     steps: 
#     - uses: actions/checkout@v3
#     - name: Setup Node.js
#       uses: actions/setup-node@v3
#       with:
#         node-version: "lts/*"
#         registry-url: 'https://registry.npmjs.org/'
#     - run: npm ci
#     - run: npm audit signatures
#     - run: npm publish --provenance --access public --tag development
#       env: 
#         NPM_AUTH_TOKEN: ${{ secrets.NPM_AUTH_TOKEN }}
      
            
