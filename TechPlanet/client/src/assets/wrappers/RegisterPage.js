import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  background: #020d2c;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    max-width: 250px;
    max-height: 100px;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper
