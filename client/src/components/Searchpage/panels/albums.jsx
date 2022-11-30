/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import StockChart from "./chart/barchart";

function Albums({ albums }, id) {
  const releaseDateData = (albums) => {
    let release_years = [];
    let counts = {};
    // Create yearly release date visualization
    for (let i = 0; i < albums.length; i++) {
      release_years.push(albums[i].release_date.split("-")[0]);
    }

    // Create counts for release years
    console.log(release_years);
    let min_key = 1000000;
    let max_key = new Date().getFullYear();
    for (let i = 0; i < release_years.length; i++) {
      if (release_years[i] < min_key) {
        min_key = release_years[i];
      }
      counts[release_years[i]] = counts[release_years[i]]
        ? counts[release_years[i]] + 1
        : 1;
    }

    // Add data for unrepresented years
    for (let i = min_key; i <= max_key; i++) {
      if (!counts[i]) {
        counts[i] = 0;
      }
    }

    return counts;
  };

  let data = releaseDateData(albums);
  let x_data = [];
  let y_data = [];

  for (const year in data) {
    x_data.push(year);
    y_data.push(data[year]);
  }

  const datac = {
    chartData: {
      labels: x_data,
      data: y_data,
      xlabel: "Year",
      ylabel: "# of Releases",
    },
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col items-start">
          <div className="text-xl font-geomatik text-zinc-200/70 mb-3 ml-4 ">
            Artist's Albums:{" "}
          </div>
          <ol className="h-[30rem] overflow-y-scroll scroll-smooth bg-zinc-900/50 rounded-3xl p-6 ">
            {albums.map((album) => (
              <>
                <li
                  className="font-geomatik text-zinc-200 bg-cine-200 mb-3 rounded-2xl bg-cover"
                  style={{ backgroundImage: `url(${album.images[0].url})` }}
                  key={album.id}
                >
                  <div
                    className="backdrop-blur-sm bg-zinc-900/80 rounded-2xl w-full p-4 h-full flex flex-row gap-3"
                    key={album.id}
                  >
                    <img
                      src={album.images[0].url}
                      className="w-20 rounded-xl"
                    />
                    <div className="flex flex-col">
                      <div className="text-xl">{album.name}</div>
                      <div className="text-sm text-zinc-200/60">
                        {album.release_date}
                      </div>
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ol>
        </div>

        <div className="w-full h-full">
          <div className="text-xl font-geomatik text-zinc-200/70 mb-3 ml-4 ">
            Album Release History
          </div>
          <div className="h-[30rem]  bg-zinc-900/50 rounded-3xl p-6 flex flex-col items-start">
            <StockChart info={datac} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Albums;
