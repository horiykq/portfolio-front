import React from 'react';
import styled from 'styled-components';
import { paths } from '../../config/paths';
import { fontSize } from '../../styles/mixins';
import { fontFamilies } from '../../styles/variables';
import PageNavigation from '../atoms/links/PageNavigation';
import NextLink from '../atoms/NextLink';

const Root = styled.nav`
  display: flex;
  flex-direction: column;
`;

const IndexLink = styled(PageNavigation)`
  ${fontSize(24)};
  font-weight: 400;
  margin-bottom: 32px;
`;

const SideNavigation: React.VFC = () => {
  return (
    <Root>
      <IndexLink href={paths.index}>
        Portfolio
        <br />
        of
        <br />
        Kaito Horiuchi
      </IndexLink>

      <PageNavigation href={paths.about}>About Me</PageNavigation>
      <PageNavigation href={paths.development}>Development</PageNavigation>
      <PageNavigation href={paths.technology}>Technology</PageNavigation>
      <PageNavigation href={paths.blog}>Blog</PageNavigation>
    </Root>
  );
};

export default SideNavigation;
