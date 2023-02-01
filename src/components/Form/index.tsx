import Button from "../Button";

import "./style.scss";

const Form: React.FC = () => {
  return (
    <form className="novaTarefa">
      <div className="inputContainer">
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          required
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="Time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Button />
    </form>
  );
};

export default Form;
