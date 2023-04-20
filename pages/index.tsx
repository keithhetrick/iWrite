import Trending from 'pages/(home)/Trending'
import Tech from 'pages/(home)/Tech'
import Travel from 'pages/(home)/Travel'
import Other from 'pages/(shared)/Other'
import Subscribe from 'pages/(shared)/Subscribe'
import Sidebar from 'pages/(shared)/Sidebar'

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
