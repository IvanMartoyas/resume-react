import { base, contacts } from '../model/resume_model';
import { useSelector } from 'react-redux';

export function Contacts () {
    var _lang_index = useSelector((state) => state.lang.value);

    return (
        <>
        
        <div className='contacts mt-4'>
            <h3>{contacts.label[_lang_index]}</h3>
            <div className="row mb-0 mb-lg-3">
                <div className='col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0'>
                    <b>{contacts.phone.label[_lang_index]}</b> <br />
                    <a href={contacts.phone.link} className='text-dark'>{contacts.phone.value}</a>
                </div>
                <div className='col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0'>
                    <b>{contacts.mail.label[_lang_index]}</b><br />
                    <a href={contacts.mail.link} className='text-dark'>{contacts.mail.value}</a>
                </div>
                <div className='col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0'>
                    <b>{contacts.GitHub.label[_lang_index]}</b><br />
                    <a href={contacts.GitHub.link} className='text-dark'>{contacts.GitHub.value}</a>
                </div>
            </div>
            <div className=''>
                <b>{contacts.GitHubRepository.label[_lang_index]}</b><br />
                <a href={contacts.GitHubRepository.link} className='text-dark'>{contacts.GitHubRepository.value}</a>
            </div>
        </div>
        </>
    )
}