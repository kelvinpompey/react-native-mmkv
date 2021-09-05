import type { MMKVConfiguration, MMKVInterface } from 'react-native-mmkv';

export const createMMKV = (config: MMKVConfiguration): MMKVInterface => {
  // @ts-expect-error global func is a native JSI func
  if (global.mmkvCreateNewInstance == null) {
    throw new Error(
      'Failed to create a new MMKV instance, the native initializer function does not exist. Is the native MMKV library correctly installed? Make sure to disable any remote debugger (e.g. Chrome) to use JSI!'
    );
  }

  // @ts-expect-error global func is a native JSI func
  return global.mmkvCreateNewInstance(config);
};
