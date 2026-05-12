import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '966'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'de8'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '92b'),
            routes: [
              {
                path: '/api/',
                component: ComponentCreator('/api/', 'fa3'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/enumerations/WorkerErrorCode',
                component: ComponentCreator('/api/enumerations/WorkerErrorCode', '92c'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/functions/createTransport',
                component: ComponentCreator('/api/functions/createTransport', '17f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/globals',
                component: ComponentCreator('/api/globals', '1f1'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/StreamLike',
                component: ComponentCreator('/api/type-aliases/StreamLike', 'c65'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/WorkerError',
                component: ComponentCreator('/api/type-aliases/WorkerError', '5d2'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/variables/version',
                component: ComponentCreator('/api/variables/version', '4c3'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/workers/background',
                component: ComponentCreator('/workers/background', 'c99'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/docker',
                component: ComponentCreator('/workers/docker', 'b45'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/middleware',
                component: ComponentCreator('/workers/middleware', 'cf1'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/options',
                component: ComponentCreator('/workers/options', '4a1'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/signals',
                component: ComponentCreator('/workers/signals', '674'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/transports',
                component: ComponentCreator('/workers/transports', 'a8c'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/troubleshooting',
                component: ComponentCreator('/workers/troubleshooting', 'a72'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '843'),
                exact: true,
                sidebar: "workersSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
