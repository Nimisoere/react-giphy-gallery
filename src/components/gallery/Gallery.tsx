import { Grid } from "@giphy/react-components";
import { GifsResult } from "@giphy/js-fetch-api";
import ResizeObserver from "react-resize-observer";
import { IGif } from "@giphy/js-types";
import React from "react";

type Props = {
  width: number;
  keyValue: string;
  setWidth: (value: number) => void;
  fetchGifs: (offset: number) => Promise<GifsResult>;
  onGifClick: (
    gif: IGif,
    e: React.SyntheticEvent<HTMLElement, Event>
  ) => void | undefined;
};

const Gallery: React.FC<Props> = React.memo(
  ({ onGifClick, keyValue, width, fetchGifs, setWidth }) => (
    <>
      <Grid
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        width={width}
        columns={8}
        className="gallery"
        hideAttribution={true}
        gutter={6}
        key={keyValue}
        noResultsMessage={<p>No result found</p>}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </>
  )
);

export default Gallery;
