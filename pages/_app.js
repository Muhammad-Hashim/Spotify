import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


export async function getServerSideProps(context) {
  fetch("https://accounts.spotify.com/authorize?client_id=f965c1e590a749e0b4a520bee38610a9&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing").then(data=>console.log(data))
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default MyApp
