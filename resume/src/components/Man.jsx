import { base  } from '../model/resume_model';
import { useSelector } from 'react-redux';

export default function Man () { 
    let Man = base.man;
    let _lang_index = useSelector((state) => state.lang.value);
    let fio = `${Man.FIO.name[_lang_index]} ${Man.FIO.lastName[_lang_index]} ${Man.FIO.patronymic[_lang_index]}`;
    let years_lang = ['Лет','Years'];

    return (
        <>
            <div className="Man">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-3">
                        <figure className='Man__imgWrapper'>
                            <img src={Man.image.data[Man.image.selecting_index]} alt={Man.image.label[_lang_index] + fio} />
                        </figure>
                    </div>
                    <div className="col-12 col-lg-6 Man__right">
                        <div className=''>
                            <div className='vacancyTitle'>
                                <div className='Man__vacansyPrev'>{base.vacancy[_lang_index]} </div>
                                {base.title_resume[_lang_index]}
                            </div>
                            <div className=''>
                                <div className="Man__fio">{fio}</div>  
                            </div>
                            <div>
                                <div className='Man__info'>
                                <span className="">{Man.age.label[_lang_index]}: </span>   
                                <span>{Man.age.value} {years_lang[_lang_index]}  </span>
                                </div>
                                <div className='Man__info'>
                                    <span>{base.salary.label[_lang_index]}: </span> 
                                    <span>{base.salary.value}</span>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h4>{base.about.label[_lang_index]}</h4>
                                <p>{base.about.description[_lang_index]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}