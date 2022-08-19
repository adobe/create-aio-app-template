/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const TheCommand = require('../src/index')
const TheGenerator = require('../generator/TemplateGenerator')

// mock generators
jest.mock('yeoman-environment')
const yeoman = require('yeoman-environment')
const mockGenInstantiate = jest.fn()
const mockRun = jest.fn()
yeoman.createEnv.mockReturnValue({
  instantiate: mockGenInstantiate,
  runGenerator: mockRun
})

test('exports', async () => {
  expect(typeof TheCommand).toEqual('function')
})

test('description', async () => {
  expect(TheCommand.description).toBeDefined()
})

test('flags', async () => {
  expect(typeof TheCommand.flags.version).toBe('object')
  expect(TheCommand.flags.version.char).toBe('v')

  expect(typeof TheCommand.flags.help).toBe('object')
  expect(TheCommand.flags.help.char).toBe('h')
})

test('args', async () => {
  expect(TheCommand.args).toBeDefined()
  expect(TheCommand.args).toBeInstanceOf(Array)

  expect(TheCommand.args[0].name).toEqual('templateName')
  expect(TheCommand.args[0].required).toEqual(true)
})

describe('run', () => {
  let command

  beforeEach(() => {
    command = new TheCommand([])
    mockGenInstantiate.mockReset()
    mockRun.mockReset()
    yeoman.createEnv.mockClear()
  })

  test('exists', async () => {
    expect(command.run).toBeInstanceOf(Function)
  })

  test('returns X', async () => {
    const templateName = 'my-template'
    await TheCommand.run([templateName])

    expect(mockGenInstantiate).toHaveBeenCalledTimes(1)
    expect(mockGenInstantiate).toHaveBeenCalledWith(
      TheGenerator,
      {
        options: {
          'dest-folder': templateName,
          'template-name': templateName
        }
      }
    )
  })
})
