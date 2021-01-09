function StepsHeader() {
  return (
    <header className="orders-steps-container">
      <div className="orders-steps-content">
        <h1 className="steps-title">SIGA AS <br/> ETAPAS</h1>
        <ul className="steps-items">
          <li>
            <spa className="steps-number">1</spa>
            Selecione os produtos e a localização.
          </li>
          <li>
          <spa className="steps-number">2</spa>
          Depois clique em  <strong>“ENVIAR PEDIDO”</strong> 
          </li>
        </ul>
      </div>
    </header>    
  );
}

export default StepsHeader;