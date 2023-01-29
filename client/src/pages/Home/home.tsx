import { useState, useEffect } from 'react';
import * as S from './styled';

import { PaginationArrows } from '../../components/PaginationArrows/paginationArrows';
import { ShortScreen } from '../../components/ShortScreen/shortScreen';
import { Contact } from '../../components/Contact/Contact';

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
              <S.nav style={{alignItems: "flex-end"}}>

              </S.nav>

              <S.Container>
                <S.Home>
                    
                </S.Home>
              </S.Container>

              <S.nav style={{alignItems: "flex-start"}}>
                <Contact />
                <PaginationArrows />
              </S.nav>
            </>
            : <ShortScreen />
          }
        </S.Layout>
      </S.Background>
    </>
  );
}