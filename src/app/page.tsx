import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function UIKit() {
  return (
    <main className="min-h-screen space-y-6 p-6">
      <h1 className="text-2xl font-bold">UI Kit</h1>
      <Card>
        <CardContent className="space-x-2 p-6">
          <Button>Primaire</Button>
          <Button variant="secondary">Secondaire</Button>
          <Button variant="outline">Outline</Button>
        </CardContent>
      </Card>
    </main>
  )
}
