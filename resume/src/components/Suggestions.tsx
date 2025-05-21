import { base } from '../model/resume_model';
import { useSelector } from 'react-redux';




export default function Skills () {
    let _lang_index = useSelector((state) => state.lang.value);
    const sUggestions = base.sUggestions;
    return (
       <>
         <div className="suggestions">
            <div className='suggestions__title'>
                <h3>{sUggestions.label[_lang_index]}</h3>
            </div>
            <div className="">
                {sUggestions.list.map((sg_list_item, i) => <SuggastionsItem key={i} item={sg_list_item} /> )}
            </div>
        </div>
       </>
    )
}

function SuggastionsItem({item}) {
    let _lang_index = useSelector((state) => state.lang.value);
    return (
        <>
            <div className='tags'>
                <div className="tags__title">{item.label[_lang_index]}</div>
                <div className='tags__row'>
                    {item.data.map((_val, key) => <div  className="tags__item badge bg-danger" key={key}>{_val}</div>)}
                </div>
            </div>
        </>
    )
}