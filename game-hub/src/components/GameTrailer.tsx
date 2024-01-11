import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: string | number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) throw error;

  const firstVideo = data?.results[0];
  if (!firstVideo) return <div>No video found</div>;

  return <video src={firstVideo.data[480]} poster={firstVideo.preview} controls={true} />;
};

export default GameTrailer;
