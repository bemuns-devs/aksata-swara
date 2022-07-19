import { TransportError } from '@directus/sdk';

export default (fn: () => void | Promise<void>) => {
  Promise.resolve(fn())
    .catch(err => {
      if (err instanceof TransportError) {
        console.error(err.stack, '\n\n', err.errors);
      } else {
        console.error(err);
      }
    });
}
