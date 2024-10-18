import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, FileText, Star } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">📊 sprint name voting</span>
          </div>
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
        <h1 className="text-3xl font-bold mb-6">admin dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">total employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">active polls</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">total kudos awarded</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,678</div>
            </CardContent>
          </Card>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>manage polls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              <Input className="w-1/3" placeholder="search polls..." />
              <Button>+ create new poll</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>POLL NAME</TableHead>
                  <TableHead>START DATE</TableHead>
                  <TableHead>END DATE</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead>ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>sprint 25 name</TableCell>
                  <TableCell>jan 1, 2025</TableCell>
                  <TableCell>jan 7, 2025</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      active
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="link" className="mr-2">edit</Button>
                    <Button variant="link">close</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>sprint 24 name</TableCell>
                  <TableCell>dec 15, 2024</TableCell>
                  <TableCell>dec 21, 2024</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      closed
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="link">view results</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>kudos leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>RANK</TableHead>
                  <TableHead>EMPLOYEE</TableHead>
                  <TableHead>KUDOS POINTS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">jane smith</div>
                        <div className="text-sm text-gray-500">jane.smith@example.com</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>1,250</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">mike johnson</div>
                        <div className="text-sm text-gray-500">mike.johnson@example.com</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>980</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>© 2025 sprint name voting app. all rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">privacy policy</a>
            <a href="#" className="hover:underline">terms of service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}