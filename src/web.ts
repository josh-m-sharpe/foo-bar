import { WebPlugin } from '@capacitor/core';
import { FooBarPlugin } from './definitions';

export class FooBarWeb extends WebPlugin implements FooBarPlugin {
  constructor() {
    super({
      name: 'FooBar',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const FooBar = new FooBarWeb();

export { FooBar };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FooBar);
