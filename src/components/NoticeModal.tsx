import React from 'react';
import styled from 'styled-components';
import {colors} from 'styles';

const SNoticeModal = styled.div`
  width: 32.2rem;
  height: 50rem;
  background-color: ${colors.backgroundGray};
  border: none;
  border-radius: 2rem;
  position: relative;
  > div:first-child {
    font-size: 1.8rem;
  }
`;

export default function NoticeModal({children}: {children: React.ReactNode}) {
  return <SNoticeModal>{children}</SNoticeModal>;
}
