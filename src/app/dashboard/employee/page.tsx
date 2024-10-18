import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Home, Search, Settings, Target } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">sprint name voting app</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">polls</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">leaderboard</a>
          </nav>
          <div className="flex items-center space-x-2">
            <span>john doe</span>
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>active polls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>sprint 25 name</span>
                  <Button variant="outline" size="sm">vote</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span>sprint 26 name</span>
                  <Button variant="outline" size="sm">vote</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>your kudos</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl font-bold">250</div>
              <div className="text-sm text-gray-500">total kudos earned</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>top performers</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span>1.</span>
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <span>alice johnson</span>
                  </div>
                  <span>520</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span>2.</span>
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>BS</AvatarFallback>
                    </Avatar>
                    <span>bob smith</span>
                  </div>
                  <span>480</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span>3.</span>
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>CB</AvatarFallback>
                    </Avatar>
                    <span>charlie brown</span>
                  </div>
                  <span>450</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>current poll: sprint 25 name</CardTitle>
            <p className="text-sm text-gray-500">ends on: august 15, 2025</p>
          </CardHeader>
          <CardContent>
            <form>
              <RadioGroup defaultValue="option-1" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="option-1" />
                  <Label htmlFor="option-1">turbo boost</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="option-2" />
                  <Label htmlFor="option-2">quantum leap</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-3" id="option-3" />
                  <Label htmlFor="option-3">nebula surge</Label>
                </div>
              </RadioGroup>
              <div className="mt-4">
                <Input placeholder="suggest a new name" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>submit vote</Button>
          </CardFooter>
        </Card>
      </main>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>© 2025 sprint name voting app</div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">privacy policy</a>
            <a href="#" className="hover:underline">terms of service</a>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4 flex space-x-2">
        <Button size="icon" variant="outline">
          <Home className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline">
          <Search className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline">
          <Settings className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline">
          <Target className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}