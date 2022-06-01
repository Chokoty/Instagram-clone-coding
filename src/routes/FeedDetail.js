import { useEffect } from "react";
import { useParams } from "react-router-dom";
function FeedDetail() {
  const { id } = useParams();
  const getFeed = async () => {
    // const json = await (
    //   await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    // ).json();
    // console.log(json);
      console.log(id);
  };
  useEffect(() => {
    getFeed();
    console.log(id);
  }, []);
  return <h1>feed{id}</h1>;
}
export default FeedDetail;