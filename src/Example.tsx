import { useShape } from "@electric-sql/react"
import "./Example.css"

type Item = { id: string }

const baseUrl = import.meta.env.VITE_ELECTRIC_URL

export const Example = () => {
  const { isError, isLoading, data: items, error } = useShape<Item>({
    url: `${baseUrl}/v1/shape/items`,
  })

  if (isError) {
    console.warn(error)

    return (
      <div>
        <h2>Error syncing data</h2>
        <p>Check the browser console for details.</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>Loading ...</div>
    )
  }

  return (
    <div>
      {items.map((item: Item, index: number) => (
        <p key={index} className="item">
          <code>{item.id}</code>
        </p>
      ))}
    </div>
  )
}
