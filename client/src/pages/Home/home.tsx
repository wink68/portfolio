import { useState, useEffect } from 'react';
import * as S from './styled';

import { ContentsNav } from '../../components/ContentsNav/contentsNav';
import { AnimationBox } from '../../components/Home/AnimationBox/animationBox';
import { Contact } from '../../components/Contact/contact';
import { PaginationArrows } from '../../components/PaginationArrows/paginationArrows';
import { ShortScreen } from '../../components/ShortScreen/shortScreen';

export function Home() {
  const [isSize, setIsSize] = useState(false);

  const handleResize = () => {
    if (window.innerHeight > window.innerWidth) {
      setIsSize(false);
    } else {
      setIsSize(true);
    }
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <S.Background>
        <S.Layout>
          {isSize ?
            <>
              <S.topNav>
                <ContentsNav />
              </S.topNav>

              <S.Container>
                <S.Home>
                  <S.HomeTitle>
                    <h1>Welcome to my portfolio!</h1>
                  </S.HomeTitle>
                  <AnimationBox />
                </S.Home>
              </S.Container>

              <S.bottomNav style={{alignItems: "flex-start"}}>
                <Contact />
                <PaginationArrows />
              </S.bottomNav>
            </>
            : <ShortScreen />
          }
        </S.Layout>
      </S.Background>
    </>
  );
}