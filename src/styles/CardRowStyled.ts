import styled from 'styled-components';

const CardRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #666;
  line-height: 1.5;
  .cell {
    padding: 3px 6px;
  }
  .number {
    width: 40px;
    text-align: center;
  }
  .name {
    width: 150px;
    font-weight: bold;
  }
  .type {
    width: 75px;
    background-color: #999;
    border-radius: 4px;
    color: #fff;
    margin-left: 6px;
    padding-top: 1px;
    padding-bottom: 1px;
    font-weight: bold;
  }
  .subtype {
    width: 75px;
  }
  .school {
    width: 40px;
  }
`;

export default CardRowStyled;
