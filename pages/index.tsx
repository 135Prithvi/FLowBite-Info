import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const _allPostsData = getSortedPostsData()
  return {
    props: {
      _allPostsData,
    },
  }
}

export default function Home({ }: any) {
  return (
    <> <div className='text-center mx-10 '>
      
      </div>
    </>
  )
}
