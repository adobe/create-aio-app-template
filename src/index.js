/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { Command, flags } = require('@oclif/command')
const path = require('path')
const yeoman = require('yeoman-environment')
// eslint-disable-next-line node/no-unpublished-require
const generator = require('../generator/TemplateGenerator')

class Index extends Command {
  async run () {
    const { args } = this.parse(Index)

    const env = yeoman.createEnv()
    const templateGen = env.instantiate(generator, {
      options: {
        'dest-folder': path.join('.', args.templateName),
        'template-name': args.templateName
      }
    })
    await env.runGenerator(templateGen)
  }
}

Index.description = `Creates an Adobe Developer App Builder template

Example:
    create-aio-app-template template-name
`

Index.flags = {
  version: flags.version({ char: 'v' }), // add --version flag to show CLI version
  help: flags.help({ char: 'h' }) // add --help flag to show CLI help
}

Index.args = [
  { name: 'templateName', required: true, description: 'the name of the template' }
]

module.exports = Index
