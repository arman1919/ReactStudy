import s from './Profileinfo.module.css';


const Profileinfo = () => {
    return (
      <div>
        <div>
          <img src="https://blog.adobe.com/en/publish/2024/10/14/media_1ca79b205381242c5f8beaaee2f0e1cfb2aa8f324.png?width=750&format=png&optimize=medium" alt="" />
        </div>
        <div className={s.descriptionBlock}>
          Ava + desc
        </div>
      </div>
    );
}

export default Profileinfo;