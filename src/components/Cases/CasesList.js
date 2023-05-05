import { Fancybox } from "utils/fancyBox";
import { casesImageArray } from "utils/casesImageStore";

export const CasesList = () => {
    return (
        <Fancybox
            options={{
                Carousel: {
                infinite: false,
                },
            }}>
            <ul className="cases_list">
                    {casesImageArray.map(({ preview, original, description }) => {
                        return (
                        <li className="cases_list_item" key={preview}>
                            <a data-fancybox="gallery" data-caption={description} href={original}>
                                <img src={preview} alt="Our work" className="cases_img"/>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </Fancybox>
    );
};