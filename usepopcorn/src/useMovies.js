import { useState, useEffect } from "react";

const KEY = "720f6c3b";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setErr("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies.");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found.");

          setMovies(data.Search);
          setErr("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setErr(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setErr("");
        return;
      }
      // handleCloseMovie()
      fetchMovies();

      return function () {
        //Just before the new key is pressed, this function executes and aborts the current fetch request
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, err };
}
