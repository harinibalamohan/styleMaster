import { Scissors, Camera, Sparkles, Users } from 'lucide-react'

const features = [
  {
    name: 'AI-Powered Recommendations',
    description: 'Get personalized hairstyle suggestions based on face shape, hair type, and preferences.',
    icon: Sparkles,
  },
  {
    name: 'Realistic Previews',
    description: 'See how a hairstyle will look before making any changes with our advanced visualization technology.',
    icon: Camera,
  },
  {
    name: 'Stylist Collaboration',
    description: 'Easily share and discuss style ideas between clients and stylists for better communication.',
    icon: Users,
  },
  {
    name: 'Trend Analysis',
    description: 'Stay up-to-date with the latest hairstyle trends and popular looks in your area.',
    icon: Scissors,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          Powerful Features for Your Salon
        </h2>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-[#A64D79] p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

