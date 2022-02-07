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

const Command = require('..//src/index')
const generator = require('../generator/TemplateGenerator')

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
  expect(typeof Command).toEqual('function')
})

test('description', async () => {
  expect(Command.description).toBeDefined()
})

test('flags', async () => {
  expect(Command.flags).toBeDefined()
})

test('args', async () => {
  expect(Command.args).toBeDefined()
  expect(Command.args.length).toEqual(1)
  expect(Command.args[0].name).toEqual('templateName')
  expect(Command.args[0].required).toEqual(true)
})

describe('instance methods', () => {
  let TheCommand

  beforeEach(() => {
    TheCommand = new Command([])
    mockGenInstantiate.mockReset()
    mockRun.mockReset()
    yeoman.createEnv.mockClear()
  })

  test('run exists', async () => {
    expect(TheCommand.run).toBeInstanceOf(Function)
  })

  test('run (no arg)', async () => {
    await expect(TheCommand.run([])).rejects.toThrow('Missing 1 required arg')
  })

  test('run', async () => {
    TheCommand.argv = ['my-template']
    await TheCommand.run()
    expect(mockGenInstantiate).toHaveBeenCalledTimes(1)
    expect(mockGenInstantiate).toHaveBeenCalledWith(
      generator,
      {
        options: {
          'dest-folder': TheCommand.argv[0],
          'template-name': TheCommand.argv[0]
        }
      })
  })
})
