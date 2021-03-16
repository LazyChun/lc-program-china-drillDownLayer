import React, { useEffect } from "react";
import { Scene } from "@antv/l7";
import { DrillDownLayer } from "@antv/l7-district";
import { Mapbox } from "@antv/l7-maps";
import styled from "styled-components";
const Map = styled.div`
  .l7-ctrl-logo {
    display: none;
  }
`;
const colors = ["#B8E1FF", "#7DAAFF", "#3D76DD", "#0047A5", "#001D70"];

const useInit = () => {
  useEffect(() => {
    const scene = new Scene({
      id: "map",
      map: new Mapbox({
        center: [116.2825, 39.9],
        pitch: 0,
        style: "blank",
        zoom: 3,
        minZoom: 3,
        maxZoom: 10
      })
    });
    scene.on("loaded", () => {
      new DrillDownLayer(scene, {
        data: [],
        viewStart: "Country",
        viewEnd: "City",
        fill: {
          color: {
            field: "NAME_CHN",
            values: colors
          }
        },
        popup: {
          enable: true,
          Html: props => {
            return `<span>${props.NAME_CHN}</span>`;
          }
        }
      });
    });
  }, []);
};

const DrillMap = ({}) => {
  useInit();
  return <Map id={"map"} style={{ width: 1300, height: 1000 }} />;
};

export default DrillMap;
