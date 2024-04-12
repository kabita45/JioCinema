import axios from "axios";
import { useEffect, useState } from "react";
import { showsCount } from "../constants/showCategories";

const useGetShows = ({ page = 1, limit = 10, type = "", id = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showsData, setShowsData] = useState([]);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(true);
  const [showType, setShowType] = useState(type);

  useEffect(() => {
    setShowsData([]);
    setError({});
    setHasNextPage(true);
  }, [showType]);

  useEffect(() => {
    setIsLoading(true);
    setError({});
    if (showType !== null) {
      axios
        .get(`https://academics.newtonschool.co/api/v1/ott/show/${id}`, {
          headers: { projectId: "f104bi07c490" },
          params: { page, limit, ...(showType && { type: showType }) },
        })
        .then((res) => {
          setIsLoading(false);
          if (id) {
            setShowsData(res?.data?.data);
            return;
          }
          setShowsData((prevData) => [...prevData, ...res.data.data]);
        })
        .catch((e) => {
          if (showsData.length >= showsCount[showType]) setHasNextPage(false);
          setError(e.response);
          console.log(e);
          setIsLoading(false);
        });
    }
  }, [page, limit, showType, id]);
  return {
    isLoading,
    error,
    showsData,
    hasNextPage,
    setShowType,
  };
};

export default useGetShows;
