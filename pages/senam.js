import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Scrollbutton from "../components/Scrollbutton.jsx";

const Senam = ({ videos }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Senam Ibu Hamil</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md p-4">
              <a
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-sm font-medium mt-2">{video.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Scrollbutton />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const playlistUrl = "https://www.googleapis.com/youtube/v3/playlistItems";
  const playlistId = "PL9vDQkooqw2i_45W5d3DTmQFnLVviMRxN";
  const apiKey = "AIzaSyC962nFGIRhp1dTvZk_JdCUB2tLLpSGz2Q";

  const response = await fetch(
    `${playlistUrl}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
  );
  const data = await response.json();

  const videoItems = data.items.map((item) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.default.url,
  }));

  return {
    props: {
      videos: videoItems,
    },
  };
}

export default Senam;
