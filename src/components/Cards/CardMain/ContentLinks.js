import style from './ContentLinks.module.scss';
import Links from '../../Links/Links';
import { linksArray } from '../../data/data';

const ContentLinks = () => {
    if (linksArray.length === 0) {
        return (
            <div className={`card ${style.contentLinks}`}>
                <p className="">Nenhum Item Encontrado</p>;
            </div>
        );
      }
    return (
        <div className={`card ${style.contentLinks}`}>
            {linksArray.map(link => (
                <Links key={link.title} link={link.links} title={link.title}/>
            ))}
        </div>
    );
}
export default ContentLinks;