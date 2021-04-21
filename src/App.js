import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";

import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./styles";

import { Text, Map, Input, Button, Spinner } from "./components";

const App = () => {
  const [data, setData] = useState([]);

  const [inputIp, setInputIp] = useState("");
  const [searchIp, setSearchIp] = useState("");
  const [loading, setLoading] = useState(true);

  const [map, setMap] = useState(null);
  const [position, setPosition] = useState([0, 0]);

  const inputIpHandler = (event) => {
    setInputIp(event.target.value);
  };

  const searchIpHandler = () => {
    setSearchIp(inputIp);
    setLoading(true);
    console.log(typeof position[0], position[0]);

    map.setView(
      [parseFloat(position[0]).toFixed(2), parseFloat(position[1]).toFixed(2)],
      20
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_y4YhHJFie5l0wGKToY6vDDQ9FmWqI&ipAddress=${searchIp}`
      )
      .then((response) => {
        setData(response.data);

        setPosition([response.data.location.lat, response.data.location.lng]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchIp]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Input value={inputIp} type="text" onChange={inputIpHandler} />
        <Button onClick={searchIpHandler}>Search IP</Button>
        <Text>My IP: {loading ? "---.---.---.---" : data.ip}</Text>
        <Text>
          My Location:{" "}
          {loading
            ? "---"
            : `${data.location.city}, ${data.location.region}
            ${data.location.postalCode}`}
        </Text>
        <Text>
          My Timezone: UTC {loading ? "--:--" : data.location.timezone}
        </Text>
        <Text>My ISP: {loading ? "---" : data.isp}</Text>
        <MapSection>
          {loading ? (
            <Spinner />
          ) : (
            <Map
              center={[
                parseFloat(position[0]).toFixed(2),
                parseFloat(position[1]).toFixed(2),
              ]}
              zoom={20}
              scrollWheelZoom={true}
              whenCreated={setMap}
              markerPosition={[
                parseFloat(position[0]).toFixed(2),
                parseFloat(position[1]).toFixed(2),
              ]}
            />
          )}
        </MapSection>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const MapSection = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80vh;

  & > div {
    width: 100%;
    height: inherit;

    & > :first-child {
      width: 100%;
      height: inherit;
    }
  }
`;

export default App;
