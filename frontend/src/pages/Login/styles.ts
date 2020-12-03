import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: grey; */

  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Main = styled.main`
  /* background-color: #c6c6c6; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 500px;
  width: 100%;
  max-width: 700px;

  form {
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 50vh;

    & > div:nth-child(2) {
      margin-top: 10px;
    }

    & > button {
      margin-top: 25px;
    }
  }

`;
