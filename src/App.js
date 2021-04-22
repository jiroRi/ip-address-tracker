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
      lat: 42.37649,
      lng: -71.23561,
      postalCode: "10001",
      region: "NY",
      timezone: "-05:00",
    }, */
  });

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
      [parseFloat(position[0]) + parseFloat(0.0005), parseFloat(position[1])],
      20
    );
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

        console.log(data);
      })
      .catch((err) => console.log(err));
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
              placeholder="Search for any IP address or domain"
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
              center={[
                parseFloat(position[0]) + parseFloat(0.0005),
                parseFloat(position[1]),
              ]}
              zoom={20}
              scrollWheelZoom={true}
              whenCreated={setMap}
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
