export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd7d5b2bf136300c08f8378',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-d7qa6kg2',
                  apiId: '63323cc7-67ef-4d66-ba4f-7dbadb61b584'
                },
                {
                  buildHookId: '5fd7d5b2c66b9b0157cbbec3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xfk5x9d9',
                  apiId: '1518450d-685a-409d-b236-743355268f3f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexsandrocruz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xfk5x9d9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
