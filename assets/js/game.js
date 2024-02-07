.choice-container {
    display: flex;
    margin-bottom: 0.5rem;
    width: 100%;
    font-size: 1.8rem;
    border: 0.1rem solid rgba(105, 65, 20, 0.5);
    background-color: white;
  }
  
  .choice-container:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(105, 65, 20, 0.5);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }
  
  .choice-prefix {
    padding: 1.5rem 2.5rem;
    background-color: #3a2e17
    color: white;
  }
  
  .div {
    background-color: aliceblue;
  }
  
  .choice-text {
    padding: 1.5rem;
    width: 100%;
  }
  
  .correct {
    background-color: #28a745;
  }
  
  .incorrect {
    background-color: #dc3545;
  }
  
  /* HUD */
  
  #hud {
    display: flex;
    justify-content: space-between;
  }
  
  .hud-prefix {
    text-align: center;
    font-size: 2rem;
  }
  
  .hud-main-text {
    text-align: center;
  }