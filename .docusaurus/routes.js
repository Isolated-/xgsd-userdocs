import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '68a'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '59a'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '9e2'),
            routes: [
              {
                path: '/api/',
                component: ComponentCreator('/api/', '1d3'),
                exact: true
              },
              {
                path: '/guides/configuration',
                component: ComponentCreator('/guides/configuration', 'edc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/modes',
                component: ComponentCreator('/guides/modes', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/project-scaffolding',
                component: ComponentCreator('/guides/project-scaffolding', '2a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/project-setup',
                component: ComponentCreator('/guides/project-setup', 'ffe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/troubleshooting',
                component: ComponentCreator('/guides/troubleshooting', '654'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/using-hooks',
                component: ComponentCreator('/guides/using-hooks', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/labs/',
                component: ComponentCreator('/labs/', 'bdf'),
                exact: true,
                sidebar: "labsSidebar"
              },
              {
                path: '/labs/code-bundler',
                component: ComponentCreator('/labs/code-bundler', 'a5f'),
                exact: true,
                sidebar: "labsSidebar"
              },
              {
                path: '/labs/overrides',
                component: ComponentCreator('/labs/overrides', '728'),
                exact: true,
                sidebar: "labsSidebar"
              },
              {
                path: '/workers/',
                component: ComponentCreator('/workers/', '3ea'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/',
                component: ComponentCreator('/workers/api/', 'e4c'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/enumerations/WorkerErrorCode',
                component: ComponentCreator('/workers/api/enumerations/WorkerErrorCode', '23a'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/functions/createHandler',
                component: ComponentCreator('/workers/api/functions/createHandler', '91c'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/functions/runWorker',
                component: ComponentCreator('/workers/api/functions/runWorker', 'b2e'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/globals',
                component: ComponentCreator('/workers/api/globals', '56d'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/Activation',
                component: ComponentCreator('/workers/api/type-aliases/Activation', '9a8'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/ActivationHandler',
                component: ComponentCreator('/workers/api/type-aliases/ActivationHandler', '366'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/ActivationSignal',
                component: ComponentCreator('/workers/api/type-aliases/ActivationSignal', 'ca4'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/Context',
                component: ComponentCreator('/workers/api/type-aliases/Context', '9eb'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/ContextMetadata',
                component: ComponentCreator('/workers/api/type-aliases/ContextMetadata', '814'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/ErrorSignal',
                component: ComponentCreator('/workers/api/type-aliases/ErrorSignal', '2c1'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/GenericSignal',
                component: ComponentCreator('/workers/api/type-aliases/GenericSignal', '84c'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/LogSignal',
                component: ComponentCreator('/workers/api/type-aliases/LogSignal', '25c'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/Signal',
                component: ComponentCreator('/workers/api/type-aliases/Signal', 'b7a'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/SignalType',
                component: ComponentCreator('/workers/api/type-aliases/SignalType', 'deb'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/SystemSignal',
                component: ComponentCreator('/workers/api/type-aliases/SystemSignal', '527'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/WorkerConfig',
                component: ComponentCreator('/workers/api/type-aliases/WorkerConfig', 'b70'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/WorkerConfigCache',
                component: ComponentCreator('/workers/api/type-aliases/WorkerConfigCache', 'c47'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/WorkerConfigCacheStrategy',
                component: ComponentCreator('/workers/api/type-aliases/WorkerConfigCacheStrategy', '971'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/WorkerError',
                component: ComponentCreator('/workers/api/type-aliases/WorkerError', '7f0'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/WorkerErrorType',
                component: ComponentCreator('/workers/api/type-aliases/WorkerErrorType', '1d9'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/WorkerOutputMode',
                component: ComponentCreator('/workers/api/type-aliases/WorkerOutputMode', 'c89'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/api/type-aliases/WorkerResult',
                component: ComponentCreator('/workers/api/type-aliases/WorkerResult', '2fc'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/background',
                component: ComponentCreator('/workers/background', 'c99'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/config',
                component: ComponentCreator('/workers/config', 'e7e'),
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
                path: '/workers/signals',
                component: ComponentCreator('/workers/signals', '674'),
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
                component: ComponentCreator('/', '845'),
                exact: true,
                sidebar: "tutorialSidebar"
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
