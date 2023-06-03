import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 350px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border-radius: 20px;

  .SearchForm-button {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 0;
    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: all 250ms;
    cursor: pointer;
    outline: none;
    background: #c8c5c5;
    transition: all 0.5s;
  }

  .SearchForm-button:hover {
    opacity: 1;
    /* background: #c8c5c5; */
    background: #fff;
    border: #fff;
  }

  .SearchForm-button-label {
    /* position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0; */
  }

  .SearchForm-input {
    /* display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px; */

    width: 100%;
    font: inherit;
    font-size: 20px;
    height: 48px;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    transition: all 0.5s;

    :focus {
      box-shadow: inset 5px 5px 40px #c8c5c5, inset -5px -5px 40px #c8c5c5;
      outline: #fff;
    }
  }

  .SearchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
