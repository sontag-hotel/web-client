import styled from 'styled-components';
import Theme from './Theme';

const StyledThemeBox = styled.div`
  display: flex;
  width: 100%;
  height: 103px;
  background: #f8f8f8;
`;

export const themes = [
  {
    id: 1,
    title: '커피 맛집',
    text: 'TASTE',
    icon: '☕️',
  },
  {
    id: 2,
    title: '분위기 감성',
    text: 'MOOD',
    icon: '📸️',
  },
  {
    id: 3,
    title: '노트북 작업',
    text: 'WORK',
    icon: '💻️',
  },
];

export default function ThemeBox() {
  return (
    <StyledThemeBox>
      {themes.map(t => (
        <Theme key={t.icon} id={t.id} text={t.title} icon={t.icon} />
      ))}
    </StyledThemeBox>
  );
}
