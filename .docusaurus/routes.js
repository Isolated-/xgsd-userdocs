import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/xgsd-userdocs/__docusaurus/debug',
    component: ComponentCreator('/xgsd-userdocs/__docusaurus/debug', '831'),
    exact: true
  },
  {
    path: '/xgsd-userdocs/__docusaurus/debug/config',
    component: ComponentCreator('/xgsd-userdocs/__docusaurus/debug/config', 'cab'),
    exact: true
  },
  {
    path: '/xgsd-userdocs/__docusaurus/debug/content',
    component: ComponentCreator('/xgsd-userdocs/__docusaurus/debug/content', '030'),
    exact: true
  },
  {
    path: '/xgsd-userdocs/__docusaurus/debug/globalData',
    component: ComponentCreator('/xgsd-userdocs/__docusaurus/debug/globalData', 'ec3'),
    exact: true
  },
  {
    path: '/xgsd-userdocs/__docusaurus/debug/metadata',
    component: ComponentCreator('/xgsd-userdocs/__docusaurus/debug/metadata', 'bf8'),
    exact: true
  },
  {
    path: '/xgsd-userdocs/__docusaurus/debug/registry',
    component: ComponentCreator('/xgsd-userdocs/__docusaurus/debug/registry', '396'),
    exact: true
  },
  {
    path: '/xgsd-userdocs/__docusaurus/debug/routes',
    component: ComponentCreator('/xgsd-userdocs/__docusaurus/debug/routes', '445'),
    exact: true
  },
  {
    path: '/xgsd-userdocs/',
    component: ComponentCreator('/xgsd-userdocs/', 'c7c'),
    routes: [
      {
        path: '/xgsd-userdocs/',
        component: ComponentCreator('/xgsd-userdocs/', '288'),
        routes: [
          {
            path: '/xgsd-userdocs/',
            component: ComponentCreator('/xgsd-userdocs/', 'b4b'),
            routes: [
              {
                path: '/xgsd-userdocs/api/',
                component: ComponentCreator('/xgsd-userdocs/api/', '9eb'),
                exact: true
              },
              {
                path: '/xgsd-userdocs/guides/configuration',
                component: ComponentCreator('/xgsd-userdocs/guides/configuration', 'b35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-userdocs/guides/modes',
                component: ComponentCreator('/xgsd-userdocs/guides/modes', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-userdocs/guides/project-scaffolding',
                component: ComponentCreator('/xgsd-userdocs/guides/project-scaffolding', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-userdocs/guides/project-setup',
                component: ComponentCreator('/xgsd-userdocs/guides/project-setup', '6db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-userdocs/guides/troubleshooting',
                component: ComponentCreator('/xgsd-userdocs/guides/troubleshooting', '4e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-userdocs/guides/using-hooks',
                component: ComponentCreator('/xgsd-userdocs/guides/using-hooks', 'd31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-userdocs/labs/',
                component: ComponentCreator('/xgsd-userdocs/labs/', '399'),
                exact: true,
                sidebar: "labsSidebar"
              },
              {
                path: '/xgsd-userdocs/labs/code-bundler',
                component: ComponentCreator('/xgsd-userdocs/labs/code-bundler', '098'),
                exact: true,
                sidebar: "labsSidebar"
              },
              {
                path: '/xgsd-userdocs/labs/overrides',
                component: ComponentCreator('/xgsd-userdocs/labs/overrides', '26e'),
                exact: true,
                sidebar: "labsSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/',
                component: ComponentCreator('/xgsd-userdocs/workers/', '6d6'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/',
                component: ComponentCreator('/xgsd-userdocs/workers/api/', '26d'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/enumerations/WorkerErrorCode',
                component: ComponentCreator('/xgsd-userdocs/workers/api/enumerations/WorkerErrorCode', '8af'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/functions/createHandler',
                component: ComponentCreator('/xgsd-userdocs/workers/api/functions/createHandler', 'aa0'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/functions/runWorker',
                component: ComponentCreator('/xgsd-userdocs/workers/api/functions/runWorker', '761'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/globals',
                component: ComponentCreator('/xgsd-userdocs/workers/api/globals', 'e1a'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/Activation',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/Activation', '0c1'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/ActivationHandler',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/ActivationHandler', '2c9'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/ActivationSignal',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/ActivationSignal', '9e7'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/Context',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/Context', '5ff'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/ContextMetadata',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/ContextMetadata', '250'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/ErrorSignal',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/ErrorSignal', 'fc0'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/GenericSignal',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/GenericSignal', '524'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/LogSignal',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/LogSignal', '500'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/Signal',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/Signal', 'b58'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/SignalType',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/SignalType', '123'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/SystemSignal',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/SystemSignal', 'e10'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/WorkerConfig',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/WorkerConfig', '561'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/WorkerConfigCache',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/WorkerConfigCache', 'fee'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/WorkerConfigCacheStrategy',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/WorkerConfigCacheStrategy', '03e'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/WorkerError',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/WorkerError', 'ee8'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/WorkerErrorType',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/WorkerErrorType', 'e37'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/WorkerOutputMode',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/WorkerOutputMode', '86f'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/api/type-aliases/WorkerResult',
                component: ComponentCreator('/xgsd-userdocs/workers/api/type-aliases/WorkerResult', '7e0'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/background',
                component: ComponentCreator('/xgsd-userdocs/workers/background', '505'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/config',
                component: ComponentCreator('/xgsd-userdocs/workers/config', 'ff0'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/docker',
                component: ComponentCreator('/xgsd-userdocs/workers/docker', 'e35'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/middleware',
                component: ComponentCreator('/xgsd-userdocs/workers/middleware', '978'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/signals',
                component: ComponentCreator('/xgsd-userdocs/workers/signals', '92d'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/troubleshooting',
                component: ComponentCreator('/xgsd-userdocs/workers/troubleshooting', '90a'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/',
                component: ComponentCreator('/xgsd-userdocs/', '551'),
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
