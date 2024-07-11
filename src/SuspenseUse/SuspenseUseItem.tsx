import { use } from "react";

import memoize from '../memoize';

const fetchData = memoize(
  (id: number) =>
    new Promise<string>((resolve) =>
      setTimeout(
        () => {
          console.log('resolving ', id)
          resolve(`${id} = started ${new Date().toLocaleTimeString()}`)
        },
        1000
      )
    )
);

export const SuspenseUseItem = ({ id }: { id: string }) => {
  const data = use(fetchData(id));
  return <h2>{data}</h2>;
}