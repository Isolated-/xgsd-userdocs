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
    component: ComponentCreator('/', '19b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '02e'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'b60'),
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
                path: '/api/type-aliases/Activation',
                component: ComponentCreator('/api/type-aliases/Activation', 'f61'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/ActivationHandler',
                component: ComponentCreator('/api/type-aliases/ActivationHandler', '1cd'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/ActivationSignal',
                component: ComponentCreator('/api/type-aliases/ActivationSignal', '353'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/Context',
                component: ComponentCreator('/api/type-aliases/Context', '62d'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/ContextMetadata',
                component: ComponentCreator('/api/type-aliases/ContextMetadata', '0c0'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/CreateTransportOpts',
                component: ComponentCreator('/api/type-aliases/CreateTransportOpts', '188'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/ErrorSignal',
                component: ComponentCreator('/api/type-aliases/ErrorSignal', '5ae'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/GenericSignal',
                component: ComponentCreator('/api/type-aliases/GenericSignal', '447'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/LogSignal',
                component: ComponentCreator('/api/type-aliases/LogSignal', '23b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/Middleware',
                component: ComponentCreator('/api/type-aliases/Middleware', '136'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/Next',
                component: ComponentCreator('/api/type-aliases/Next', 'f31'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/Signal',
                component: ComponentCreator('/api/type-aliases/Signal', '6a5'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/SignalType',
                component: ComponentCreator('/api/type-aliases/SignalType', 'a6f'),
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
                path: '/api/type-aliases/SystemSignal',
                component: ComponentCreator('/api/type-aliases/SystemSignal', '4c9'),
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
                path: '/api/type-aliases/WorkerOutputMode',
                component: ComponentCreator('/api/type-aliases/WorkerOutputMode', 'a90'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/api/type-aliases/WorkerResult',
                component: ComponentCreator('/api/type-aliases/WorkerResult', '6de'),
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
                path: '/misc/background',
                component: ComponentCreator('/misc/background', 'cca'),
                exact: true
              },
              {
                path: '/workers/Benchmarks/benchmarking',
                component: ComponentCreator('/workers/Benchmarks/benchmarking', 'e00'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/workers/Examples/axios',
                component: ComponentCreator('/workers/Examples/axios', '877'),
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
