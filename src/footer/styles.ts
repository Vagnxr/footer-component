import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const Strong = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 14px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin: 14px 45px;

    a {
      margin: 0;
      font-size: 13px;
      text-decoration: none;
      color: #2e2e2e;
      transition: all ease 0.3s;

      &:hover {
        transform: translateX(3px);
        color: #000;
      }
    }
  }

  @media (max-width: 775px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 8px;
    margin: 0px;

    a {
      width: 30px;
      height: 30px;
      transition: all ease 0.3s;

      &:hover {
        transform: translateY(-3px);
        color: #000;
      }
    }
  }
`;

export const Line = styled.footer`
  display: flex;
  column-gap: 8px;
  row-gap: 8px;
  flex-wrap: wrap;
  margin-top: 10px;
  padding-top: 4px;
  border-top: 1px solid #f2f2f2;  

  li {
    position: relative;
    display: flex;
    padding: 4px 16px 4px 0;
    color: #3e3f40;
    font-size: 1.2rem;
    white-space: nowrap;

    &:after {
      box-sizing: border-box;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      content: "";
      right: 8px;
      width: 1px;
      height: 12px;
      background-color: #3e3f40;
    }
    a {
      font-size: 12px;
      color: #3e3f40;
      transition: all ease 0.3s;
      text-decoration: none;

      &:hover {
        transform: translateY(-1px);
      }
    }
  }
`;
