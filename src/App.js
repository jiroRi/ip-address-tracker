import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";

import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./styles";
import bg from "./images/pattern-bg.png";

import { Text, Map, Input, Button, Spinner } from "./components";

const App = () => {
  const [data, setData] = useState({
    ip: "66.254.114.41",
    isp: "Reflected Networks, Inc.",
    location: {
      city: "Waltham",
      country: "US",
      geonameId: 4954380,
      lat: 42.37649,
      lng: -71.23561,
      postalCode: "02451",
      region: "Massachusetts",
      timezone: "-04:00",
    },
  });

  const [inputIp, setInputIp] = useState("");
  const [searchIp, setSearchIp] = useState("");
  const [loading, setLoading] = useState(false);

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
    /*     axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_y4YhHJFie5l0wGKToY6vDDQ9FmWqI&domain=${searchIp}`
      )
      .then((response) => {
        setData(response.data);

        setPosition([response.data.location.lat, response.data.location.lng]);
        setLoading(false);

        console.log(data);
      })
      .catch((err) => console.log(err)); */
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

          <Info>
            <Text variant="label">IP ADDRESS</Text>
            <Text variant="card">{loading ? "---.---.---.---" : data.ip}</Text>

            <Text variant="label">LOCATION</Text>
            <Text variant="card">
              {loading
                ? "---"
                : `${data.location.city}, ${data.location.region}
                ${data.location.postalCode}`}
            </Text>

            <Text variant="label">TIMEZONE</Text>
            <Text variant="card">
              UTC {loading ? "--:--" : data.location.timezone}
            </Text>

            <Text variant="label">ISP</Text>
            <Text variant="card">{loading ? "---" : data.isp}</Text>
          </Info>
        </ContentSection>
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
  min-height: 300px;
  background-image: url(${bg});

  padding: 24px 24px 0 24px;
`;

const Search = styled.div`
  position: relative;

  width: 100%;
  height: 56px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(15, 15, 15, 0.15);
  margin: 32px 0;

  overflow: hidden;

  @media ${(props) => props.theme.device.desktopS} {
    width: 38.54166666666667%;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 16px;
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
