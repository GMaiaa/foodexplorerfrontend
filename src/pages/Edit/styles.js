import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.4rem auto 7.2rem;
  grid-area: "header" "main" "footer";
`;

export const Main = styled.main`
  grid-area: "main";
  /* max-width: 136.8rem; */
  margin: 0 auto;
  width: 136.8rem;

  display: flex;
  flex-direction: column;
  padding: 2.4rem 12.3rem;
`;

export const ButtonBack = styled.div`
  margin: 1.8rem 0;
  max-width: 136.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > a {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    display: flex;
    align-items: center;

    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.6rem;
  }

  > h2 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.48rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 136.8rem;

  label {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  .uploadImage {
    #file {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      display: flex;
      flex-direction: column;

      gap: 0.8rem;

      .uploadImageSelect {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 3rem;
        border-radius: 0.5rem;
        height: 4.8rem;
        width: 30rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    input[type="file"] {
      /* Retirando a mensagem padrão */
      display: none;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-bottom: 3.2rem;
`;

export const TextArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  margin-bottom: 4.8rem;
  > label {
    margin-top: 3.2rem;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > textarea {
    height: 17.2rem;
    width: 100%;
    padding: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border-radius: 0.5rem;
    border: 1px solid white;
    resize: none;
  }
`;

export const SectionIngredients = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid white;
  padding: 1rem;
`;

export const SendFormWithImage = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  > button {
    width: 40%;
  }
`;

export const Select = styled.div`
  > select {
    appearance: none;
    width: 300px;
    height: 4.8rem;
    padding: 1.3rem;
    background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
        no-repeat right 0.8em center / 1.4em,
      linear-gradient(
        to left,
        ${({ theme }) => theme.COLORS.TOMATO_100} 3em,
        transparent 3em
      );
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-top: 0.8rem;

    font-size: 1.6rem;
    border-radius: 0.5rem;
    border: 1px solid white;
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }

    &:focus {
      outline: none;
    }

    > option {
      color: inherit;
      font-size: 16px;
      background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }
  }
`;

export const MainUser = styled.main`
  grid-area: "main";
  margin: 0 auto;
  width: 136.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  img {
    width: 30rem;
    height: 30rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h4 {
      font-size: 1.8rem;
      font-weight: 300;
    }

    h2 {
      font-size: 5rem;

      > span {
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
      }
    }
  }
`;
