import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/xgsd-docs/__docusaurus/debug',
    component: ComponentCreator('/xgsd-docs/__docusaurus/debug', 'e25'),
    exact: true
  },
  {
    path: '/xgsd-docs/__docusaurus/debug/config',
    component: ComponentCreator('/xgsd-docs/__docusaurus/debug/config', 'fbd'),
    exact: true
  },
  {
    path: '/xgsd-docs/__docusaurus/debug/content',
    component: ComponentCreator('/xgsd-docs/__docusaurus/debug/content', 'e78'),
    exact: true
  },
  {
    path: '/xgsd-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/xgsd-docs/__docusaurus/debug/globalData', '240'),
    exact: true
  },
  {
    path: '/xgsd-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/xgsd-docs/__docusaurus/debug/metadata', '2c5'),
    exact: true
  },
  {
    path: '/xgsd-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/xgsd-docs/__docusaurus/debug/registry', '90d'),
    exact: true
  },
  {
    path: '/xgsd-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/xgsd-docs/__docusaurus/debug/routes', '773'),
    exact: true
  },
  {
    path: '/xgsd-docs/',
    component: ComponentCreator('/xgsd-docs/', 'b46'),
    routes: [
      {
        path: '/xgsd-docs/',
        component: ComponentCreator('/xgsd-docs/', '5c6'),
        routes: [
          {
            path: '/xgsd-docs/',
            component: ComponentCreator('/xgsd-docs/', 'c21'),
            routes: [
              {
                path: '/xgsd-docs/guides/Configuration/env-vars',
                component: ComponentCreator('/xgsd-docs/guides/Configuration/env-vars', 'f05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-docs/guides/Configuration/reference',
                component: ComponentCreator('/xgsd-docs/guides/Configuration/reference', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-docs/guides/Configuration/templating',
                component: ComponentCreator('/xgsd-docs/guides/Configuration/templating', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-docs/guides/Plugins/getting-started',
                component: ComponentCreator('/xgsd-docs/guides/Plugins/getting-started', '603'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-docs/guides/project-config-basics',
                component: ComponentCreator('/xgsd-docs/guides/project-config-basics', '390'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-docs/guides/project-setup',
                component: ComponentCreator('/xgsd-docs/guides/project-setup', 'e3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/xgsd-docs/',
                component: ComponentCreator('/xgsd-docs/', '793'),
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
