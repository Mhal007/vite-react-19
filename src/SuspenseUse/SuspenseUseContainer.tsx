import { SuspenseUseItem } from "./SuspenseUseItem"

export const Container = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <SuspenseUseItem id={1} />
        <SuspenseUseItem id={2} />
      </Suspense>
    </div>
  )
 }
 