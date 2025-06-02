import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function RespectPage() {
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Card className="relative">
          <div className="absolute -rotate-12 top-4 right-4 z-10">
            <span className="font-bold text-3xl">
              <span className="text-blue-600">RES</span>
              <span className="text-yellow-500">PE</span>
              <span className="text-red-600">CT</span>
            </span>
          </div>
          <div className="relative h-64">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">John Doe - Germany</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="relative">
          <div className="absolute -rotate-12 top-4 right-4 z-10">
            <span className="font-bold text-3xl">
              <span className="text-blue-600">RES</span>
              <span className="text-yellow-500">PE</span>
              <span className="text-red-600">CT</span>
            </span>
          </div>
          <div className="relative h-64">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">Maria Silva - Spain</h2>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="relative">
          <div className="absolute -rotate-12 top-4 right-4 z-10">
            <span className="font-bold text-3xl">
              <span className="text-blue-600">RES</span>
              <span className="text-yellow-500">PE</span>
              <span className="text-red-600">CT</span>
            </span>
          </div>
          <div className="relative h-64">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">Pierre Dubois - France</h2>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </CardContent>
        </Card>

        {/* Card 4 */}
        <Card className="relative">
          <div className="absolute -rotate-12 top-4 right-4 z-10">
            <span className="font-bold text-3xl">
              <span className="text-blue-600">RES</span>
              <span className="text-yellow-500">PE</span>
              <span className="text-red-600">CT</span>
            </span>
          </div>
          <div className="relative h-64">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">Anna Kowalski - Poland</h2>
            <p className="text-gray-600">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </CardContent>
        </Card>

        {/* Card 5 */}
        <Card className="relative">
          <div className="absolute -rotate-12 top-4 right-4 z-10">
            <span className="font-bold text-3xl">
              <span className="text-blue-600">RES</span>
              <span className="text-yellow-500">PE</span>
              <span className="text-red-600">CT</span>
            </span>
          </div>
          <div className="relative h-64">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">Marco Rossi - Italy</h2>
            <p className="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
