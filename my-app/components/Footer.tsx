import Link from 'next/link'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xs text-gray-400">&copy; 2024 StyleMaster. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">X</span>
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

