import { useState } from 'react';
import * as S from './styled';

export function AnimationBox() {
  const [isHovering, setIsHovering] = useState(0);

  return (
    <S.Background>
      <S.Container
        onMouseOver={() => setIsHovering(1)}
        onMouseOut={() => setIsHovering(0)}
      >
        {isHovering ? (
          <S.SmallBox style={{
            width: "20vh",
            height: "20vh",
            backgroundColor: "#4169E1"
          }}>
            <S.TextBox>Come here!</S.TextBox>
          </S.SmallBox>
        ) : (
          <S.SmallBox>
            <S.TextBox>Come here!</S.TextBox>
          </S.SmallBox>
        )}
      </S.Container>
    </S.Background>
  );
}