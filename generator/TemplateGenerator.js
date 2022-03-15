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

const Generator = require('yeoman-generator')
const path = require('path')

/*
      'initializing',
      'prompting',
      'configuring',
      'default',
      'writing',
      'conflicts',
      'install',
      'end'
      */

class TemplateGenerator extends Generator {
  constructor (args, opts) {
    super(args, opts)

    // options are inputs from CLI or yeoman parent generator
    this.option('template-name', { type: String, default: 'no-name-template' })
    this.option('dest-folder', { type: String, default: '.' })

    // props are used by templates
    this.props = {
      projectName: this.options['template-name']
    }
  }

  async initializing () {
  }

  async writing () {
    const destFolder = this.options['dest-folder']
    this.sourceRoot(path.join(__dirname, './templates/'))

    //   this.fs.copyTpl(
    //     this.templatePath('**/*'),
    //     this.destinationPath(destFolder),
    //     this.props,
    //     {},
    //     { globOptions: { ignore: ['**/_*.*'] } } // ignore any files starting with underscore
    //   )

    //   // npm pack will not include .gitignore template files so we need to rename it
    //   // see https://github.com/npm/npm/issues/3763
    //   this.fs.copyTpl(
    //     this.templatePath('_dot.gitignore'),
    //     this.destinationPath(path.join(destFolder, '.gitignore')),
    //     this.props
    //   )

  //   this.fs.copyTpl(
  //     this.templatePath('_dot.gitignore'),
  //     this.destinationPath(path.join(destFolder, 'src', 'templates', '_dot.gitignore')),
  //     this.props
  //   )
  // }
  }
}

module.exports = TemplateGenerator
