import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    videoAPI();
  }, [id]);

  const videoAPI = async () => {
    if (id) {
      const videoData = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await videoData?.json();
      const filterData = json?.results?.filter((item) => {
        return item?.type === "Trailer";
      });
      const trailerData =
        filterData?.length === 0 ? json?.results[0] : filterData[0];
      dispatch(addTrailer(trailerData));
    }
  };
};

export default useTrailerVideo;
