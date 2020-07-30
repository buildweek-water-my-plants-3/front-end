import React from "react";
import styled from "styled-components";
// import fonts from '../../fonts.css'

import { Route } from "react-router-dom";
import Locator from "./Locator";
import LoginPromo from "./loginPromo";
import LogoutPromo from "./LogoutPromo";
import MainBar from "./MainBar";

function Header() {
  const HeaderDiv = styled.div`
    width: 90vw;
  `;

  const PromoBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #0b9444;
    height: 2rem;
    // font-weight;
  `;

  const PromoBarOuter = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0;
    margin-right: calc(2rem + 6px);
    &&:hover {
    }
  `;

  const PromoBarInner = styled.div`
    position: relative;
    display: flex;
    // flex-direction:
    align-items: center;
    justify-content: space-between;
    background-color: #0b9444;
    width: 100%;
    margin: 2rem auto;
    color: white;
    font-family: "Roboto Condensed", sans-serif;
  `;

  return (
    <HeaderDiv>
      <PromoBar>
        <PromoBarOuter>
          <PromoBarInner>
            <Locator />

            <LoginPromo />
          </PromoBarInner>
        </PromoBarOuter>
      </PromoBar>

      <MainBar />
    </HeaderDiv>
  );
}

export default Header;
