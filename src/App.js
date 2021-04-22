import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";

import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./styles";
import bg from "./images/pattern-bg.png";

import { Text, Map, Input, Button, Spinner, Card } from "./components";

const App = () => {
  const [data, setData] = useState({
    /*     ip: "192.212.174.101",
    isp: `SpaceX Starlink`,
    location: {
      city: "Brooklyn",
      country: "US",
      geonameId: 4954380,
      lat: 43.73158115206511,
      lng: 7.415045211338055,
      postalCode: "10001",
      region: "NY",
      timezone: "-05:00",
    }, */
  });

  const [inputIp, setInputIp] = useState("");
  const [searchIp, setSearchIp] = useState("");
  const [loading, setLoading] = useState(true);

  const [map, setMap] = useState(null);
  const [position, setPosition] = useState([
    43.73158115206511,
    7.415045211338055,
  ]);
  const [error, setError] = useState(false);

  const inputIpHandler = (event) => {
    setInputIp(event.target.value);
  };

  const searchIpHandler = () => {
    setSearchIp(inputIp);
    setLoading(true);
    setError(false);

    map.setView(
      [parseFloat(position[0]) + parseFloat(0.0005), parseFloat(position[1])],
      18
    );
  };

  const onSearchEnter = (event) => {
    if (event.key === "Enter") {
      setSearchIp(inputIp);
      setLoading(true);
      setError(false);

      map.setView(
        [
          parseFloat(position[0]) + parseFloat(0.0005),
          parseFloat(position[1]) - parseFloat(0.00025),
        ],
        17
      );
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_y4YhHJFie5l0wGKToY6vDDQ9FmWqI&domain=${searchIp}`
      )
      .then((response) => {
        setData(response.data);

        setPosition([response.data.location.lat, response.data.location.lng]);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setInputIp("");
        setLoading(false);
      });
  }, [searchIp]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <ContentSection>
          <Text variant="title">IP Address Tracker</Text>
          <Search>
            <Input
              value={inputIp}
              type="text"
              onChange={inputIpHandler}
              placeholder={
                error
                  ? "Invalid IP/Domain"
                  : "Search for any IP address or domain"
              }
              error={error}
              onKeyPress={onSearchEnter}
            />
            <Button onClick={searchIpHandler} />
          </Search>
          <Card
            ip={loading ? "---.---.---.---" : data.ip}
            city={loading ? "---" : data.location.city}
            region={loading ? "---" : data.location.region}
            postalCode={loading ? "---" : data.location.postalCode}
            timezone={loading ? "--:--" : data.location.timezone}
            isp={loading ? "---" : data.isp}
          />
        </ContentSection>
        <MapSection>
          {loading ? (
            <Spinner />
          ) : (
            <Map
              className="map"
              center={[
                parseFloat(position[0]) + parseFloat(0.00025),
                parseFloat(position[1]) - parseFloat(0.00025),
              ]}
              zoom={17}
              scrollWheelZoom={true}
              zoomControl={false}
              whenCreated={setMap}
              minZoom={10}
              maxZoom={18}
              markerPosition={[
                parseFloat(position[0]),
                parseFloat(position[1]),
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

  width: 100%;
  height: 100%;
`;

const ContentSection = styled.div`
  position: relative;

  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 300px;
  max-height: 300px;
  background-image: url(${bg});
  background-size: 100% 100%;

  padding: 24px 24px 0 24px;

  @media ${(props) => props.theme.device.tablet} {
    padding: 64px 64px 0 64px;
  }

  @media ${(props) => props.theme.device.tablet} {
    max-height: 280px;
    padding: 32px 32px 0 32px;
  }
`;

const Search = styled.div`
  position: relative;

  width: 100%;
  height: 48px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(15, 15, 15, 0.15);
  margin: 32px 0;

  @media ${(props) => props.theme.device.tablet} {
    max-width: 556px;
    height: 56px;
  }

  @media ${(props) => props.theme.device.laptop} {
    margin: 32px 0 48px 0;
  }
`;

const MapSection = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  & > .map {
    width: 100%;
    height: inherit;
  }
`;

export default App;
