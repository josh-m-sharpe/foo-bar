declare module "@capacitor/core" {
  interface PluginRegistry {
    FooBar: FooBarPlugin;
  }
}

export interface FooBarPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
