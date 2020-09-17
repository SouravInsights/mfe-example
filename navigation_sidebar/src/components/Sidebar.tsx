import React, { FC, lazy, Suspense } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as icons from "@fortawesome/pro-solid-svg-icons";
import * as _ from "lodash";
import logoUrl from "../assets/images/lobox-footer.svg";

// @ts-ignore
const Icon = lazy(() => import("common/Icon"));

// @ts-ignore
const Button = lazy(() => import("common/Button"));

export type menuLinkType = {
  icon: IconProp;
  name: string;
  value: string;
  __typename: string;
  key: string;
};
const StyledWrapper = styled.div``;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  font-family: Roboto, sans-serif;
  line-height: 30px;
  font-size: 16px;
  text-decoration: none;
  color: #485363;
  padding: 10px 0 10px 0;

  &:hover {
    background: rgba(83, 132, 238, 0.1);
    color: #5384ee;
  }
`;

const StyledLink = styled.a`
  text-decoration: inherit;
  color: inherit;
  display: block;
`;

const StyledIcon = styled(Icon)`
  margin: 0 1.25em;
`;

const StyledFooter = styled.div`
  ul {
    margin: 20px 0 10px;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    a {
      font-family: Roboto, sans-serif;
      font-size: 15px;
      color: #8493a8;
      text-decoration: none;
    }
  }

  img {
    display: block;
    margin: auto;
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  padding-bottom: 20px;
  width: 230px;
`;

export const translation = gql`
  query Q {
    getTranslationByComponentId(language: "en_US", componentId: 1010) {
      key
      value
      icon
    }
  }
`;
/*
  First Query the backend for the traslated data, and assign on data. Keep initialized the side panel check flags
  like which keys and values will be printed.

  Once get data from backend, parse on the basis of key and split to get the hint of the string content
  And compare with the listed data in inner for loop with menuLinks name

  Later on Check for specific keys like privacy, terms, more, etc which will be printed based oin traslated value

  Then there's a part for the invite Friends, which remain with static key, but having different traslated value.
*/

const Sidebar: FC = () => {
  const { loading, error, data } = useQuery(translation);
  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error $error</p>;
  let displayMenu: Array<menuLinkType>;
  if (data.getTranslationByComponentId) {
    displayMenu = [];
    console.log(data);
    data.getTranslationByComponentId.forEach((link: any) => {
      if (link.icon && link.value) {
        let temp: any = {};
        temp = { name: undefined, icon: undefined, key: undefined };
        temp.value = link.value;
        temp.key = link.key;
        temp.name = link.value;
        temp.icon = _.get(icons, link.icon);
        console.log(temp);
        displayMenu.push(temp);
      }
    });
  }
  return (
    <StyledWrapper>
      <StyledList>
        {displayMenu.map((menuLink: menuLinkType) => (
          <StyledListItem key={menuLink.value}>
            <StyledLink href="/">
              <Suspense fallback={<span>Loading</span>}>
                <StyledIcon
                  icon={menuLink.icon}
                  fixedWidth
                  color="#5384EE"
                  size="1x"
                />
              </Suspense>
              {menuLink.value}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
      <Footer>
        <StyledFooter>
          <Suspense fallback={<span>Loading</span>}>
            <Button buttonSize="large">Invite Your Friends</Button>
          </Suspense>
          <ul>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Cookies</a>
            </li>
            <li>
              <a href="/">More</a>
            </li>
          </ul>
          <img src={logoUrl} alt="lobox logo footer" />
        </StyledFooter>
      </Footer>
    </StyledWrapper>
  );
};

export default Sidebar;
