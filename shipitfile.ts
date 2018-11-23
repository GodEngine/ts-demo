/* eslint-disable import/no-extraneous-dependencies */
/// <reference path="./shipitfile.d.ts" />

import pm from 'shipit-pm'
import deploy from 'shipit-better-deploy'
import cnpm from 'shipit-cnpm'

module.exports = shipit => {
  deploy(shipit)
  cnpm(shipit)
  pm(shipit)
  shipit.initConfig({
    default: {
      workspace: '/tmp/deploy/medicine-web',
      deployTo: '/home/work/medicine-web',
      repositoryUrl: '',
      ignores: ['.git'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      pullDataDeploy: true,
      cnpm: {
        flags: '--production',
        local: false,
        npm: 'cnpm',
        remote: true,
      },
      pm: {
        production: {
          path: '/home/work/medicine-web/current/pm2/production.json',
        },
        development: {
          path: '/home/work/medicine-web/current/pm2/development.json',
        },
      },
    },
    development: {
      servers: ['work@10.9.78.79'],
      branch: 'dev',
    },
    production: {
      servers: ['work@10.42.22.206'],
      branch: 'master',
    },
  })
}
