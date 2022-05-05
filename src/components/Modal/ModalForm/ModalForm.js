import style from "./ModalForm.module.scss";

const ModalForm = (props) => {
  return (
    <div className={style.modalContentForm}>
      <h3>Adicionar novo item</h3>
      <form>
        <div>
          <label>Nome</label>
          <input className={style.inputText} type="text" placeholder="Youtube" />
        </div>

        <div>
          <input type="checkbox" name="contact" value="email" ></input>
          <label>Título do Grupo</label>
        </div>

        <div>
          <label>Url</label>
          <input className={style.inputText} type="text" placeholder="https://youtube.com/" />
        </div>

        <div>
          <label>Shortcut</label>
          <input  className={style.inputText} type="text" placeholder="yt" />
        </div>

        <div>
            <button className={`btn ${style.btnModal}`}>Adicionar</button>
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
