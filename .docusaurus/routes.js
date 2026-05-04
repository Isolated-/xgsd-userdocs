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
    component: ComponentCreator('/xgsd-userdocs/', 'bb1'),
    routes: [
      {
        path: '/xgsd-userdocs/',
        component: ComponentCreator('/xgsd-userdocs/', 'a4a'),
        routes: [
          {
            path: '/xgsd-userdocs/',
            component: ComponentCreator('/xgsd-userdocs/', 'b6f'),
            routes: [
              {
                path: '/xgsd-userdocs/advanced/',
                component: ComponentCreator('/xgsd-userdocs/advanced/', '0ff'),
                exact: true,
                sidebar: "advancedSidebar"
              },
              {
                path: '/xgsd-userdocs/api/',
                component: ComponentCreator('/xgsd-userdocs/api/', 'be2'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/xgsd-userdocs/config/',
                component: ComponentCreator('/xgsd-userdocs/config/', '4da'),
                exact: true,
                sidebar: "configSidebar"
              },
              {
                path: '/xgsd-userdocs/guides/Configuration/env-vars',
                component: ComponentCreator('/xgsd-userdocs/guides/Configuration/env-vars', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-userdocs/guides/Configuration/templating',
                component: ComponentCreator('/xgsd-userdocs/guides/Configuration/templating', '4d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-userdocs/guides/Plugins/getting-started',
                component: ComponentCreator('/xgsd-userdocs/guides/Plugins/getting-started', '41d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-userdocs/guides/project-config-basics',
                component: ComponentCreator('/xgsd-userdocs/guides/project-config-basics', '063'),
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
                path: '/xgsd-userdocs/labs/',
                component: ComponentCreator('/xgsd-userdocs/labs/', '399'),
                exact: true,
                sidebar: "labsSidebar"
              },
              {
                path: '/xgsd-userdocs/labs/http-server',
                component: ComponentCreator('/xgsd-userdocs/labs/http-server', '03f'),
                exact: true,
                sidebar: "labsSidebar"
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
