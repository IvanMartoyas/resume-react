import { base, contacts } from '../model/resume_model';
import { useSelector } from 'react-redux';

export default function Footer () {
    var _lang_index = useSelector((state) => state.lang.value);

    return (
        <footer className='bg-light Footer'>
            <div className="container contacts">
                <div className="row">
                    <div className='col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0'>
                        <b>{contacts.phone.label[_lang_index]}</b> <br />
                        <a href={contacts.phone.link} className='text-dark'>{contacts.phone.value}</a>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0'>
                        <b>{contacts.mail.label[_lang_index]}</b><br />
                        <a href={contacts.mail.link} className='text-dark'>{contacts.mail.value}</a>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0'>
                        <b>{contacts.GitHub.label[_lang_index]}</b><br />
                        <a href={contacts.GitHub.link} className='text-dark'>{contacts.GitHub.value}</a>
                    </div>
                    <hr className='d-md-none' />
                    <div className='col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0 Footer__copyright'>
                        <div>Copyright © IVAN MARTOYAS </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}