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
    component: ComponentCreator('/xgsd-userdocs/', 'a7d'),
    routes: [
      {
        path: '/xgsd-userdocs/',
        component: ComponentCreator('/xgsd-userdocs/', '909'),
        routes: [
          {
            path: '/xgsd-userdocs/',
            component: ComponentCreator('/xgsd-userdocs/', '000'),
            routes: [
              {
                path: '/xgsd-userdocs/advanced/',
                component: ComponentCreator('/xgsd-userdocs/advanced/', 'ec8'),
                exact: true,
                sidebar: "advancedSidebar"
              },
              {
                path: '/xgsd-userdocs/advanced/Plugins/',
                component: ComponentCreator('/xgsd-userdocs/advanced/Plugins/', '536'),
                exact: true,
                sidebar: "advancedSidebar"
              },
              {
                path: '/xgsd-userdocs/advanced/Plugins/webhooks',
                component: ComponentCreator('/xgsd-userdocs/advanced/Plugins/webhooks', '398'),
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
                component: ComponentCreator('/xgsd-userdocs/config/', 'dfd'),
                exact: true,
                sidebar: "configSidebar"
              },
              {
                path: '/xgsd-userdocs/guides/modes',
                component: ComponentCreator('/xgsd-userdocs/guides/modes', '87c'),
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
