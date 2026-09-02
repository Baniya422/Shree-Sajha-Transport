export default function BlogGrid() {
  const blogs = [
    {
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
      date: 'October 3, 2025',
      title: 'CRS Invests Holistic Asset Metrics For Tomorrow To Take From Here',
      category: 'Article'
    },
    {
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
      date: 'October 2, 2025',
      title: 'Cheap Airline Tickets Smart Ways To Save',
      category: 'Guide'
    },
    {
      image: 'https://images.unsplash.com/photo-1474694096075-55313e6b64f2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
      date: 'October 1, 2025',
      title: 'Global Secrets Reimagine Dim Putting Travelmates To Shame',
      category: 'Article'
    },
    {
      image: 'https://images.unsplash.com/photo-1578062867137-a7d26505521b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
      date: 'September 30, 2025',
      title: 'The Luxury Of Traveling With Pearl Chalet Companies',
      category: 'Article'
    },
    {
      image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
      date: 'September 29, 2025',
      title: 'Family Safari Vacation To The Serengeti Home Of Big Guide',
      category: 'Guide'
    },
    {
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
      date: 'September 28, 2025',
      title: 'Airbnb Camping Adventure Travel To New Charter Company',
      category: 'Article'
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">The latest articles and industry insights</h2>
        <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700">View all →</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <article key={idx} className="border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-xs text-slate-500 uppercase">{blog.category} • {blog.date}</p>
              <h3 className="text-lg font-semibold mt-2 leading-tight">{blog.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
