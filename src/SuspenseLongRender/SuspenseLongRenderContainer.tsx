import { Suspense } from "react"
import { SuspenseLongRenderItem } from "./SuspenseLongRenderItem"

export const SuspenseLongRenderContainer = () => {
  return (
    <div>
      <h1>Suspense</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspenseLongRenderItem id="1" />
        <SuspenseLongRenderItem id="2" />
      </Suspense>
    </div>
  )
}