import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#1A1A1D] via-[#3B1C32] to-[#6A1E55] to-[#A64D79] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          StyleMaster
          <div>
          Transform Your Hair Studio with AI
          </div>
           
        </h1>
       
        <p className="mt-6 max-w-2xl mx-auto text-xl">
          The AI-enabled hairstyling solution that brings personalized recommendations and realistic previews to your salon.
        </p>
        <div className="mt-10">
          <Button size="lg" variant="secondary">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </div>
  )
}

