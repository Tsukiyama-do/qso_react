import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import IC502 from '../assets/ic_502_01.jpg'
import styled from 'styled-components'


const Styles = styled.div`


  background : url(${IC502}) no-repeat top center;
  background-size: cover;

  .jumbotron {
    background-color: rgba(245, 245, 245, 0.7);
  }

`;

export const History = () =>  (
    <Styles>
      <Container>
        <br />
        <Jumbotron>
        <h1>最新情報</h1>
        <p> オンエアー:2022/07/23(自宅ベランダ） : 1 qso <br />
            局免許変更の認可:2022/07/22 : HF機(uSDX+)の追加 <br />
            オンエアー:2022/07/03(由比ヶ浜） : 1 qso <br />
            オンエアー:2022/06/18(自宅ベランダ） : 1 qso <br />
            ホームページ:2021/12/31 : ホームページをVue.jsからReact.jsへ変更 <br />
            オンエアー:2021/05/04(稲村ヶ崎） : 1 qso <br />
            オンエアー:2020/05/30(長谷貯水池） : 1 qso <br />
            オンエアー:2020/03/15(自宅ベランダ） : 1 qso <br />
            ホームページ:2020/01/04 : ホームページのリフォーム <br />
            オンエアー:2019/12/01(六国見山の山頂） : 3 qso <br />
            オンエアー:2019/11/09(稲村ヶ崎、江ノ島） : 0 qso <br />
            オンエアー:2019/08/25(自宅ベランダ） : 1 qso <br />
            オンエアー:2019/08/18(稲村ヶ崎） : 2 qso <br />
            オンエアー:2019/06/01(長谷貯水池） : 1 qso <br />
            オンエアー:2019/05/25(長谷貯水池） : 2 qso <br />
            オンエアー:2019/05/12(江ノ島） : 1 qso <br />
            オンエアー:2019/05/05(六国見山の山頂） : 1 qso <br />
            オンエアー:2019/05/04(自宅ベランダ） : 1 qso <br />
            オンエアー:2019/04/29(六国見山の山頂） : 1 qso <br />
            オンエアー:2019/04/21(鎌倉大仏ハイクコース） : 1 qso <br />
            オンエアー:2019/03/31(自宅ベランダ） : 3 qso <br />
            オンエアー:2019/03/10(自宅ベランダ） : 1 qso <br />
            オンエアー:2019/03/02(鎌倉大仏ハイクコース） : 1 qso <br />
            オンエアー:2019/02/24(鎌倉大仏ハイクコース） : 0 qso <br />
            オンエアー:2019/02/10(鎌倉坂の下） : 0 qso <br />
            オンエアー:2019/02/03(江ノ島） : 0 qso <br />
            オンエアー:2019/01/27(鎌倉山山頂） : 0 qso <br />
            オンエアー:2019/01/20(江ノ島） : 1 qso <br />
            オンエアー開始日:2019/01/05（鎌倉長谷貯水池） : 0 qso <br />
            開局承認日:2018/12/19</p>
            <br />
            <br />
        </Jumbotron>
      </Container>
      <br />
      <br />
    </Styles>
)
