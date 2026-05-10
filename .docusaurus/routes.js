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
    component: ComponentCreator('/xgsd-userdocs/', '5f9'),
    routes: [
      {
        path: '/xgsd-userdocs/',
        component: ComponentCreator('/xgsd-userdocs/', 'aa1'),
        routes: [
          {
            path: '/xgsd-userdocs/',
            component: ComponentCreator('/xgsd-userdocs/', 'ba0'),
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
                path: '/xgsd-userdocs/workers/background',
                component: ComponentCreator('/xgsd-userdocs/workers/background', '505'),
                exact: true,
                sidebar: "workersSidebar"
              },
              {
                path: '/xgsd-userdocs/workers/experiments',
                component: ComponentCreator('/xgsd-userdocs/workers/experiments', 'e78'),
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
                path: '/xgsd-userdocs/workers/overview',
                component: ComponentCreator('/xgsd-userdocs/workers/overview', '735'),
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
